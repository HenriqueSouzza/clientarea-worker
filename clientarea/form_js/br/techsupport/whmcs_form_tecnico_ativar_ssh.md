---
subject: Suporte Técnico - Ativação SSH
showWhen:
  - method: isInGroup
    vars: [SHARED_ALL,PLUS_ALL,RESELLER_ALL,VPS_ALL,DEDICATED_ALL]
tags:
  - whmcs_form_tecnico_ativar_ssh
root:
  name: techsupport
  as: Ativação SSH
fields:
  - label: Informe o nome do usuário de cPanel que deseja ativar o SSH
    type: text
---