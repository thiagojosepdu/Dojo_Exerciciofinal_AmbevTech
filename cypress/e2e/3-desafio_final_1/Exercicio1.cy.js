/// <reference types="cypress" />

describe("Exercicio 01-DojoCypress", () => {
    beforeEach (() => cy.visit("home/")); //acessa a página
    it.only("Deve adicionar Produto 1", () => { //Preencha os campos
        cy.wait(2000) //Espera 2 segundos a página carregar
        cy.viewport(1440, 900) //Resolução da tela
        cy.get('#primary-menu > .menu-item-629 > a').click() 
        cy.get(':nth-child(8) > .page-numbers').click()  
        cy.get('div>h3>a[href="http://lojaebac.ebaconline.art.br/product/viktor-lumatech-pant/"]').click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()
       });
       it.only("Deve adicionar Produto 2", () => { 
           cy.get('#primary-menu > .menu-item-629 > a').click() 
           cy.get(':nth-child(8) > .page-numbers').click()  
           cy.get('div>h3>a[href="http://lojaebac.ebaconline.art.br/product/zeppelin-yoga-pant/"]').click()
           cy.get('.button-variable-item-36').click()
           cy.get('.button-variable-item-Red').click()
           cy.get('.single_add_to_cart_button').click()
          });
       it.only("Deve adicionar Produto 3", () => { 
           cy.get('#primary-menu > .menu-item-629 > a').click() 
           cy.get(':nth-child(8) > .page-numbers').click()  
           cy.get('div>h3>a[href="http://lojaebac.ebaconline.art.br/product/zoltan-gym-tee/"]').click()
           cy.get('.button-variable-item-XL').click()
           cy.get('.button-variable-item-Yellow').click()
           cy.get('.single_add_to_cart_button').click()
          });
          it.only("Deve validar produto no carrinho", () => { 
           cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
           cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
           cy.get('.product-name > a').should('contain', 'Viktor LumaTech™️ Pant - 32, Red  ')
           cy.get('.product-name > a').should('contain', 'Zeppelin Yoga Pant - 36, Red')
           cy.get('.product-name > a').should('contain', 'Zoltan Gym Tee - XL, Yellow')
          });
});