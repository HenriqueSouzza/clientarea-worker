---
subject: Suporte Técnico - Ajuda com domínios adicionais
showWhen:
  - method: isInGroup
    vars: [RESELLER_ALL,VPS_ALL,DEDICATED_ALL,WPHOSTING_ALL]
  - method: isProduct
    vars: [PLANO_M,PLANO_BUSINESS]
tags:
  - whmcs_form_tecnico_ajuda_com_dominios_adicionais
root:
  name: techsupport
  as: Ajuda com domínios adicionais
fields:
  - label: Informe o domínio que você deseja ajuda
    type: text
  - label: Informe o erro apresentado
    type: textarea
    rows: 5
  - label: Como podemos reproduzir o erro?
    type: textarea
    rows: 5
    optional: true
  - label: Comentário geral
    type: textarea
    rows: 5
    optional: true
  - label: Possui Anexo? Nos Envie!
    type: file
    accept: .jpg, .png, .pdf, .doc
    optional: true
---