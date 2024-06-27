---
subject: Suporte Técnico - Meu Site Foi Invadido
showWhen:
  - method: isInGroup
    vars: [CRIADOR_SITES_ALL,SHARED_ALL,PLUS_ALL,VPS_ALL,DEDICATED_ALL]
tags:
  - whmcs_form_tecnico_site_invadido
root:
  name: techsupport
  as: Meu Site Foi Invadido
fields:
  - label: Qual domínio foi invadido?
    type: text
  - label: Possui print? Nos Envie!
    type: file
    optional: true
  - label: Comentário geral
    type: textarea
    rows: 5
    optional: true
---