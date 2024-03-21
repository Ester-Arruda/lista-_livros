///<reference types="cypress">

describe("Visualizar lista de livros", () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5173/")
    })

    it("Deve apresentar uma lista com 12 livros", () => {
        cy.get('[data-cy="lista"] li').should('have.length', 12)
    })

    it("Deve verificar a existencia de autor, gênero, idioma, páginas, ano de publicação, editora e sinopse em todos os livros", () => {
        const infos = ["Autor", "Gênero", "Idioma", "Páginas", "Ano de Publicação", "Editora", "Sinopse"];        
        cy.get('button.MuiButtonBase-root').each((button) => {
            cy.wrap(button).find('[data-cy="book-info"] p').each((p, index) => {
                const infoToCheck = infos[index];
                cy.wrap(p).invoke('text').then(text => {
                    expect(text).to.contain(infoToCheck);
                });
            });
        });
    })

    it("Deve usar o filtro e retornar um livro existente", () => {
        cy.get('[data-cy="search"]').type('A Revolução')
        cy.get('[data-cy="book-info"] h5').invoke('text').then(text => {
            expect(text).to.contain("A Revolução");
        })
    })

    it("Deve filtrar um livro não cadastrado e exibir a mensagem 'A pesquisa não retornou nenhum resultado'", () => {
        cy.get('[data-cy="search"]').type('O Nome do Vento')
        cy.get('[data-cy="msgFilter"]').contains('A pesquisa não retornou nenhum resultado').should('exist')
    })
})
