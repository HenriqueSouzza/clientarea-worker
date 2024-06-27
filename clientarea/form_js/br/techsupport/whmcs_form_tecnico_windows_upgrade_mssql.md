---
subject: Suporte Técnico - Upgrade de MS SQL
showWhen:
  - method: isProduct
    vars:
      - DEDICADO_WINDOWS_BASICO
      - DEDICADO_WINDOWS_STANDARD
      - DEDICADO_WINDOWS_ELITE
      - DEDICADO_WINDOWS_PRO
tags:
  - whmcs_form_tecnico_windows_upgrade_mssql
root:
  name: techsupport
  as: Upgrade de MS SQL
fields:
  - label: Selecione a versão do MS SQL desejada
    type: select
    options:
      - name: MS SQL Server 2008 - Web Edition | R$50.00 por mês por processador
        value: 1
      - name: MS SQL Server 2008 - Workgroup Edition | R$150.00 por mês por processador
        value: 2
      - name: MS SQL Server 2005 - Workgroup Edition | R$150.00 por mês por processador
        value: 3
      - name: MS SQL Server 2005 - Standard Edition | R$700.00 por mês por processador
        value: 4
      - name: MS SQL Server 2008 - Standard Edition | R$700.00 por mês por processador
        value: 5
      - name: MS SQL Server 2005 - Enterprise Edition | R$2100.00 por mês por processador
        value: 6
      - name: MS SQL Server 2008 - Enterprise Edition | R$2100.00 por mês por processador
        value: 7
---