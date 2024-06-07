import flet as ft

def main(pagina):
    texto = ft.Text("EltonZap")

    nome_usuario = ft.TextField(label="Escreva seu nome")
    campo_mensagem = ft.TextField(label="Digite uma mensagem")


    def entrar_popup(e):
        popup.open = False

        pagina.remove(botao_iniciar)
        pagina.remove(texto)

        pagina.add(campo_mensagem)

        pagina.updade()

    popup = ft.AlertDialog(
        open=False,
        modal=True,
        title=ft.Text("Bem vindo ao EltonZap"),
        content=nome_usuario,
        actions=[ft.ElevatedButton("Entrar", on_click=entrar_popup)],
        
    )

    def entrar_chat(evento):
        pagina.dialog = popup
        popup.open = True
        pagina.update()


    botao_iniciar = ft.ElevatedButton("Iniciar chat", on_click=entrar_chat)

    pagina.add(texto)
    pagina.add(botao_iniciar)

ft.app(target=main)