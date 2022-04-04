describe("app works correctly with routes", function () {
    before(() => {
        cy.visit("http://localhost:3000/");
    });

    it("drag and drop", function () {
        cy.contains("Краторная булка N-200i").trigger("dragstart");
        cy.get("[class^=main_right_panel]").trigger("drop");
        cy.get("[class^=main_right_panel]").contains(
            "Краторная булка N-200i"
        );
        cy.get("[class^=button_button]").should("not.be.disabled");
    });

    it("delete ingredient from burger", function () {
        cy.contains("Соус Spicy-X").trigger("dragstart");
        cy.get("[class^=main_right_panel]").trigger("drop");
        cy.get("[class^=constructor-element__action]").eq(1).click();
        cy.get("[class^=main_right_panel]")
            .contains("Соус Spicy-X")
            .should("not.exist");
    });

    it("show modal", function () {
        cy.contains("Соус Spicy-X").click();
        cy.contains("Детали ингредиента").should("be.visible");
        cy.get("[id=modal] span").click();
        cy.contains("Детали ингредиента").should("not.exist");
    });

    it("increment count ingredient", function () {
        cy.contains("Соус традиционный галактический").trigger("dragstart");
        cy.get("[class^=main_right_panel]").trigger("drop");
        cy.contains("Соус традиционный галактический").trigger("dragstart");
        cy.get("[class^=main_right_panel]").trigger("drop");
        cy.get("[class^=counter_counter__num]").last().contains("2");
    });

    it("decrement count ingredient", function () {
        cy.get("[class^=constructor-element__action]").eq(1).click();
        cy.get("[class^=counter_counter__num]").last().contains("1");
    });

    it("create order", function () {
        cy.get("[class^=button_button]").contains("Оформить заказ").click();
        cy.contains("Вход");
        cy.get("[class^=input__icon]").first().click();
        cy.get("input[name=email]").type("mkBessonov@mail.ru");
        cy.get("[class^=input__icon]").last().click();
        cy.get("input[name=pass]").type('12345678{enter}');
        cy.contains("Соберите бургер");
        cy.get("button").contains("Оформить заказ").click();
        cy.wait(20000);
        cy.contains("Ваш заказ начали готовить").should("be.visible");
        cy.get("[id=modal] span").click();
        cy.contains("Ваш заказ начали готовить").should("not.exist");
    });
});