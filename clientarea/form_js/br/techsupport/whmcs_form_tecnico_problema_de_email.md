---
subject: Suporte Técnico - Problemas com E-mail
showWhen:
  - method: isInGroup
    vars: [CRIADOR_SITES_ALL,SHARED_ALL,PLUS_ALL,RESELLER_ALL,VPS_ALL,DEDICATED_ALL,GAPPS_ALL,WPHOSTING_ALL]
  - method: isProduct
    vars: [CRIADOR_SITES_LOJA,CRIADOR_SITES_PESSOAL,CRIADOR_SITES_PROFISSIONAL]
tags:
  - whmcs_form_tecnico_problema_de_email
root:
  name: techsupport
  as: Problemas com E-mail
fields:
  - label: Endereço do Remetente
    type: text
  - label: Endereço do Destinatário
    type: text
  - label: Usa cliente de e-mail (Outlook, Thunderbird, MacMail)?
    type: radio
    inline: true
    options:
      - name: Sim
        value: Sim
      - name: Não
        value: Nao
  - label: Mensagem de Erro (Se existir)
    type: text
    optional: true
  - label: Descrição da dificuldade
    type: textarea
    rows: 5
  - label: Telefone para contato
    type: text
  - label: Possui print? Nos Envie!
    type: file
    optional: true
---