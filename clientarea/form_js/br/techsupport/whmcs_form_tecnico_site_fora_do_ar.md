---
subject: Suporte Técnico - Site Fora do Ar
showWhen:
  - method: isInGroup
    vars: [CRIADOR_SITES_ALL,SHARED_ALL,PLUS_ALL,VPS_ALL,DEDICATED_ALL]
tags:
  - whmcs_form_tecnico_site_fora_do_ar
root:
  name: techsupport
  as: Site Fora do Ar
fields:
  - label: Qual domínio está fora do ar?
    type: text
  - label: Possui print? Nos Envie!
    type: file
    optional: true
  - label: Comentário geral
    type: textarea
    rows: 5
    optional: true
---