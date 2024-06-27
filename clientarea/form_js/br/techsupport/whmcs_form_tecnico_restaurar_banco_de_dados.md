---
subject: Suporte Técnico - Restauração de Banco de Dados 
showWhen:
  - method: isInGroup
    vars: [SHARED_ALL,PLUS_ALL,RESELLER_ALL,VPS_ALL,DEDICATED_ALL,WPHOSTING_ALL]
tags:
  - whmcs_form_tecnico_restaurar_banco_de_dados
root:
  name: techsupport
  as: Restauração de Banco de Dados 
fields:
  - label: Informe a localização do arquivo na sua hospedagem
    type: text
    info: "Exemplo: public_html/bancodedados"
  - label: Informe o nome de usuário desejado
    type: text
  - label: Informe a senha do usuário do banco desejada para o banco
    type: text
---