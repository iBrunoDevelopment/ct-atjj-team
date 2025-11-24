<?php
// Configurações do CT ATJJ TEAM
$ct_nome = "CT ATJJ TEAM";
$ct_slogan = "Transformando pessoas através do Jiu-Jitsu, com excelência técnica, ética e valores orientais.";
$ct_contato = "teamatjj@gmail.com";
$ct_telefone = "(82) 99345-3783";
$ct_endereco = "União dos Palmares/AL, Brasil";

// Retorna as configurações
function getConfig() {
    return [
        'nome' => $GLOBALS['ct_nome'],
        'slogan' => $GLOBALS['ct_slogan'],
        'contato' => $GLOBALS['ct_contato'],
        'telefone' => $GLOBALS['ct_telefone'],
        'endereco' => $GLOBALS['ct_endereco']
    ];
}
?>