---
subject: Suporte Técnico - Solicitação de Reboot
showWhen:
  - method: isInGroup
    vars: [CRIADOR_SITES_ALL,SHARED_ALL,PLUS_ALL,VPS_ALL,DEDICATED_ALL]
tags:
  - whmcs_form_tecnico_reboot
root:
  name: techsupport
  as: Solicitação de Reboot
fields:
  - label: Instruções Especiais
    type: textarea
    info: "ex.: o SSH está configurado em uma porta diferente"
    rows: 5
    optional: true
---

Solicite a reinicialização seu servidor dedicado ou VPS