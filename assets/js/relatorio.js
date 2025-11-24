// Dados dos alunos - Turma Kids
const alunos = [
  {
    nome: "1. Andriely",
    fortes: ["Postura exemplar e boa disciplina", "Capacidade de assimilação rápida"],
    fracos: ["Dificuldade em aplicar técnicas durante o randori"],
    recomendacoes: ["Mais tempo em situações de luta controlada", "Atividades com foco em transições fluídas", "Reforço de confiança com treinos dirigidos"],
    obs: ["Andriely é dedicada, centrada e está sempre com uma postura admirável. Ela aprende rápido e demonstra respeito pelo processo, mesmo que ainda precise acreditar mais na própria capacidade durante os randoris."]
  },
  {
    nome: "2. Antonely",
    fortes: ["Boa postura e disciplina em sala", "Capacidade de assimilação rápida", "Boa compreensão teórica", "Foco e disciplina nos treinos"],
    fracos: ["Limitação de mobilidade que afeta a execução técnica", "Dificuldade em aplicar técnicas sob pressão", "Falta de confiança em rola livre"],
    recomendacoes: ["Simulações com foco técnico e emocional", "Trabalhar escapes e controle de guarda", "Atividades de mobilidade e coordenação motora fina", "Drills específicos com foco em detalhes técnicos"],
    obs: ["Antonely é uma aluna atenta, estudiosa e muito interessada em aprender. Mesmo com algumas limitações físicas, ela se destaca pela persistência e pela mente forte. Tem tudo para ir longe."]
  },
  {
    nome: "3. Bernardo",
    fortes: ["Grande evolução emocional", "Boa resistência física", "Aprimoramento técnico consistente", "Boa leitura de luta e uso do peso corporal"],
    fracos: ["Técnica ainda em desenvolvimento", "Dificuldade em manter a calma sob pressão", "Falta de variação nas estratégias de luta", "Reação frente a oponentes mais rápidos"],
    recomendacoes: ["Trabalhar guarda, raspagens e passagens", "Trabalhar a concentração durante os treinos", "Drills curtos com repetições técnicas", "Treinos de ataque reativo"],
    obs: ["Bernardo é um exemplo de superação emocional. De um aluno que se deixava dominar pela pressão, hoje demonstra coragem e maturidade. Seu progresso é um orgulho para todos nós."]
  },
  {
    nome: "4. Doji",
    fortes: ["Eficiência no Juji Gatame da guarda fechada", "Boa movimentação e agilidade", "Capacidade de adaptação durante a luta", "Agilidade e precisão nas transições"],
    fracos: ["Pouco repertório de jogo por cima", "Necessidade de aprimorar técnicas de queda", "Falta de variação nas estratégias de luta"],
    recomendacoes: ["Explorar passagens de guarda e Tate Shiho Gatame", "Introduzir ataques de kimura, americana, estrangulamento", "Trabalhar quedas e defesas de quedas", "Drills específicos para ampliar repertório"],
    obs: ["Doji é ágil, técnico e gosta de buscar a finalização. Seu jogo é bem definido e ele se diverte treinando. Agora, o próximo passo é explorar novos caminhos dentro da luta"]
  },
  {
    nome: "5. Enzo",
    fortes: ["Nível técnico elevado (faixa amarela)", "Boa movimentação e agilidade", "Capacidade de adaptação durante a luta", "Agilidade e precisão nas transições", "Execução limpa e eficaz", "Boa aplicação das posições sem uso excessivo de força"],
    fracos: ["Pouco desafiado na turma atual", "Necessidade de maior desafio técnico", "Estímulo pode cair com turmas mais iniciantes"],
    recomendacoes: ["Avançar para turma de nível superior", "Desafios técnicos mais complexos e simulação de randori mais desafiador", "Propor funções de tutoria com iniciantes"],
    obs: ["Enzo já demonstra um jiu-jitsu mais refinado e maduro. Seu nível técnico é alto e ele inspira os colegas com sua calma e precisão. Está pronto para novos desafios."]
  },
  {
    nome: "6. Heitor",
    fortes: ["Base sólida e bom equilíbrio"],
    fracos: ["Controle e paciência em transições", "Técnicas de queda (O-soto-gari)", "Controle do adversário fragilizado", "Postura às vezes excessivamente reativa"],
    recomendacoes: ["Treinos com foco em primeiro ataque", "Drills de transição Tate Shiho Gatame → finalização", "Treinos de pressão e estabilização lateral", "Prática de quedas com foco em técnica", "Trabalhar sequência ofensiva"],
    obs: ["Heitor é leve, rápido e muito inteligente. Tem uma base admirável para a idade. Sua resiliência é acima da média, e com mais treinos de controle, será um atleta completo."]
  },
  {
    nome: "7. Jenifer",
    fortes: ["Início técnico consistente (O-Soto Gari)", "Boa movimentação e agilidade", "Capacidade de adaptação durante a luta"],
    fracos: ["Faltas constantes prejudicaram o ritmo e a segurança técnica", "Controle e paciência em transições", "Técnicas de queda (O-soto-gari)", "Controle do adversário fragilizado", "Postura às vezes excessivamente reativa", "Segurança e presença no tatame diminuíram"],
    recomendacoes: ["Reforço individual para retomada da técnica", "Treinos lúdicos e reforço de autoestima", "Retomar sequência de fundamentos com foco em base sólida", "Trabalhar sequência ofensiva"],
    obs: ["Jenifer começou com muita energia e técnica promissora (O-soto-gari). Com um pouco mais de regularidade e confiança, ela pode voltar a evoluir bastante. A base já está em construção."]
  },
  {
    nome: "8. Jessé",
    fortes: ["Superação de bloqueios emocionais (em andamento)", "Superação de fobia social (em andamento)", "Boa mobilidade e coragem renovada", "Flexibilidade e agilidade notáveis"],
    fracos: ["Controle técnico durante transições", "Organização da guarda e escapes", "Medo residual em quedas em pé em randoris"],
    recomendacoes: ["Drills de estabilidade e variações básicas com foco em guarda e quedas seguras", "Situações específicas de controle e saída", "Trabalhar sequência ofensiva", "Treinos lúdicos e reforço de autoestima", "Estímulo positivo contínuo"],
    obs: ["Jessé é uma grande vitória para todos nós. Venceu o medo e agora encara qualquer desafio com coragem. Sua trajetória mostra o poder da persistência e da superação."]
  },
  {
    nome: "9. Kauã",
    fortes: ["Alta capacidade intelectual e de assimilação", "Boa mobilidade e coragem renovada", "Rapidez para entender técnicas", "Tai otoshi muito eficiente", "Boas finalizações no Tate Shiho Gatame (Juji Gatame)"],
    fracos: ["Controle técnico durante transições", "Ainda em fase de construção de ouchi gari"],
    recomendacoes: ["Aprimorar variações de quedas em pé", "Repetições guiadas de encadeamentos técnicos", "Trabalhar sequência ofensiva", "Drills de estabilidade e variações básicas com foco em guarda e quedas seguras"],
    obs: ["Kauã tem uma pegada firme, gosta de derrubar e já começa a entender a lógica das transições. Com mais consistência, será um atleta difícil de ser parado."]
  },
  {
    nome: "10. Kiroshi",
    fortes: ["Alta capacidade intelectual e de assimilação", "Rapidez para entender técnicas"],
    fracos: ["Distração e falta de foco", "Perde-se facilmente durante as execuções"],
    recomendacoes: ["Atividades com foco e tempo reduzido", "Jogos que exigem atenção e reação", "Técnicas com estímulos auditivos e visuais"],
    obs: ["Kiroshi é muito inteligente e entende tudo com rapidez. O desafio está em manter a atenção durante toda a aula. Quando foca, mostra que tem um grande potencial."]
  },
  {
    nome: "11. Manu",
    fortes: ["Facilidade de assimilação técnica", "Boa base do Tate Shiho Gatame e transição rápida para Juji Gatame"],
    fracos: ["Precisa desenvolver variações defensivas e ofensivas em pé", "Refino técnico em detalhes avançados"],
    recomendacoes: ["Trabalhar Juji Gatame por diferentes entradas", "Variar posições (do Uki-gatame, Yoko Shiho Gatame)", "Drills específicos para detalhes técnicos avançados", "Estimular aplicação de técnicas em rola livre sob pressão"],
    obs: ["Manu tem uma percepção técnica acima da média e uma postura muito madura. Ela faz parecer fácil o que é difícil. Seu jiu-jitsu é bonito de ver em ação, apesar de sua pouca idade."]
  },
  {
    nome: "12. Samuel",
    fortes: ["Boa capacidade de aprendizado", "Biotipo ideal para jogo por cima"],
    fracos: ["Insegurança na luta em pé", "Dificuldade em manter o controle sob pressão", "Base instável, medo de cair", "Puxada para guarda mal executada", "Conversa excessiva durante os treinos"],
    recomendacoes: ["Reforço de quedas (ukemi) e base", "Trabalhar entradas seguras (Tai Otoshi, O-Goshi)", "Enfatizar transições para Tate Shiho Gatame e domínio por cima"],
    obs: ["Samuel é comunicativo e tem um bom entendimento técnico, mas ainda precisa confiar mais em si. Superar o medo da queda será o ponto de virada para o seu crescimento."]
  },
  {
    nome: "13. Valentina",
    fortes: ["Agilidade, garra e flexibilidade excepcionais", "Tate Shiho Gatame forte e boa postura em lutas", "Boa passagem de guarda e controle por cima", "Reverte o Tate Shiho Gatame com facilidade", "Boas finalizações no Tate Shiho Gatame (Juji Gatame)"],
    fracos: ["Técnica ainda em desenvolvimento; tende a confiar demais na força física", "Guarda fácil de ser passada, precisa desenvolver uma guarda mais consistente"],
    recomendacoes: ["Trabalhar respiração (Mushin) e controle emocional", "Aprimorar técnicas de guarda (fechada, aranha, borboleta)", "Drills específicos para detalhes técnicos avançados", "Estimular aplicação de técnicas em rola livre sob pressão", "Exercícios de estabilização e foco tático"],
    obs: ["Valentina é determinada, intensa e apaixonada pela luta. Tem um espírito de guerreira e um Tate Shiho Gatame que impressiona. Agora é hora de transformar sua força em precisão."]
  }
];

// Inicialização da tabela
document.addEventListener('DOMContentLoaded', function() {
  const tabela = document.getElementById("aluno-tabela");
  
  alunos.forEach((aluno, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${aluno.nome}</td>
      <td><button class="view-btn" onclick="abrirModal(${index})">Ver Perfil</button></td>
    `;
    tabela.appendChild(row);
  });
});

// Funções do Modal
function abrirModal(index) {
  const aluno = alunos[index];
  document.getElementById("modal-nome").textContent = aluno.nome;
  preencherLista("modal-fortes", aluno.fortes);
  preencherLista("modal-fracos", aluno.fracos);
  preencherLista("modal-recomendacoes", aluno.recomendacoes);
  preencherLista("modal-obs", aluno.obs);
  document.getElementById("modal").style.display = "block";
}

function preencherLista(id, itens) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  
  if (itens && itens.length > 0) {
    itens.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "Nenhuma informação adicional.";
    li.style.color = "#666";
    li.style.fontStyle = "italic";
    ul.appendChild(li);
  }
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// Fechar modal clicando fora
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    fecharModal();
  }
}