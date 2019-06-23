<template>
  <div id="app">
    <vue-snotify></vue-snotify>
    <div class="modal fade bd-example-modal-lg" id="modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <form @submit.prevent="onSubmit" action="#" method="post">
              
              <div class="form-group">
                <label for="formGroupExampleInput">Nome do primeiro participante:</label>
                <input type="text" v-model="part1.nome" class="form-control" id="formGroupExampleInput" placeholder="Participante 1" required>
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2">Nome do primeiro participante:</label>
                <input type="text" v-model="part2.nome" class="form-control" id="formGroupExampleInput2" placeholder="Participante 2" required>
              </div>
              <button type="submit" class="btn btn-primary">Começar</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" text-center id="exampleModalLongTitle">O jogador {{ ganhador.nome }} venceu!!</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <img src="./assets/silvio.gif">
            <img src="./assets/silvio2.gif">
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      
      <div class="row">
        <div class="col-12 text-center"><br>
          <h1> Testes do Milhão </h1>
        </div>
      </div>

      <div v-if="inicio" class="row">
        <div class="col-12 text-center align-middle"><br><br><br>
          <button type="button" class="btn btn-lg btn-outline-success" data-toggle="modal" data-target=".bd-example-modal-lg">Iniciar jogo!</button>
        </div>
      </div>
      
      <div v-else class="row">
      
        <div class="col-6 bg-light bloco">
            <div class="row">
              <div class="card col-3">
                <img width="110px" src="./assets/avatar1.jpg">
                <div class="card-body text-center">
                  <h5>{{ part1.nome }}</h5>
                </div>
              </div>

              <div class="col-9">
                <br><h3>Progresso...</h3><br>
                <div class="row">
                  <div class="col-10">
                  <img v-if="part1.acertos > 0" width="60px" src="./assets/correndo.gif">
                  <img v-else width="60px" src="./assets/inicio_progresso.jpg">
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" :style="`width: ${part1.acertos * 10}%`" 
                      :aria-valuenow="part1.acertos" aria-valuemin="0" aria-valuemax="10">{{part1.acertos}}/10</div>
                  </div>
                </div>
                
                <div class="col-2">
                  <img width="50px" src="./assets/trofeu.jpg">
                </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div v-if="jogador_atual == 1" class="card col-12">
                <div class="card-body">
                  <h5 class="card-title">{{ questao_atual.quest }}</h5>
                  <form @submit.prevent="sendResponse" action="#" method="post">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="resposta" id="resposta" v-model="resposta" value="true">
                      <label class="form-check-label" for="resposta">
                        Verdadeiro
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="resposta" id="resposta" v-model="resposta" value="false">
                      <label class="form-check-label" for="resposta">
                        Falso
                      </label>
                    </div><br>
                    <button type="submit" class="btn btn-outline-primary">Enviar resposta</button>
                  </form>
                </div>
              </div>

              <div class="card col-12" v-else>
                <div v-if="part1.inicio" class="card-body">
                  <h2 class="text-center">Aguarde sua vez!</h2>
                </div>
                <div v-else class="card-body">
                  <img src="./assets/errou.jpg">
                </div>
              </div>

            </div>

        </div>
      
        <div class="col-6 bg-light bloco">
            <div class="row">
              <div class="card col-3">
                <img width="110px" src="./assets/avatar2.jpg">
                <div class="card-body text-center">
                  <h5>{{ part2.nome }}</h5>
                </div>
              </div>

              <div class="col-9">
                <br><h3>Progresso...</h3><br>
                <div class="row">
                  <div class="col-10">
                  <img v-if="part2.acertos > 0" width="60px" src="./assets/correndo.gif">
                  <img v-else width="60px" src="./assets/inicio_progresso.jpg">
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" :style="`width: ${part2.acertos * 10}%`" 
                      :aria-valuenow="part2.acertos" aria-valuemin="0" aria-valuemax="10">{{part2.acertos}}/10</div>
                  </div>
                </div>
                
                <div class="col-2">
                  <img width="50px" src="./assets/trofeu.jpg">
                </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div v-if="jogador_atual == 2" class="card col-12">
                <div class="card-body">
                  <h5 class="card-title">{{ questao_atual.quest }}</h5>
                  <form @submit.prevent="sendResponse" action="#" method="post">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="resposta" id="resposta" v-model="resposta" value="true">
                      <label class="form-check-label" for="resposta">
                        Verdadeiro
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="resposta" id="resposta" v-model="resposta" value="false">
                      <label class="form-check-label" for="resposta">
                        Falso
                      </label>
                    </div><br>
                    <button type="submit" class="btn btn-outline-primary">Enviar resposta</button>
                  </form>
                </div>
              </div>

              <div class="card col-12" v-else>
                <div v-if="part2.inicio" class="card-body">
                  <h2 class="text-center">Aguarde sua vez!</h2>
                </div>
                <div v-else class="card-body">
                  <img src="./assets/errou.jpg">
                </div>
              </div>
            </div>

        </div>
      
      </div>
    </div>

  </div>
</template>

<script>
import JQuery from 'jquery'
let $ = JQuery

export default {
  name: 'app',
  data () {
    return {
      inicio : true,
      ganhador : {},
      part1: {
        nome: '',
        acertos: 0,
        inicio: true
      },
      part2: {
        nome: '',
        acertos: 0,
        inicio:  true
      },
      jogador_atual: Math.floor(Math.random() * (2 - 1 + 1) + 1),
      questao_atual: {},
      resposta: "",
      questoes_respondidas: [],
      questoes: [
        {
          id: 1,
          quest: 'É correto o que se afirma em: a preocupação com a qualidade deixou de ser um diferencial competitivo e passou a ser um pré requisito básico para participação do mercado.',
          result: "true"
        },
        {
          id: 2,
          quest: 'É correto o que se afirma em: a qualidade de software ainda depende principalmente do correto emprego de boas metodologias pelos desenvolvedores.',
          result: "true"
        },
        {
          id: 3,
          quest: 'É correto o que se afirma em: erro é fruto de uma ação humana.',
          result: "true"
        },
        {
          id: 4,
          quest: 'É correto o que se afirma em: falha é um erro de código.',
          result: "true"
        },
        {
          id: 5,
          quest: 'É correto o que se afirma em: erro é um problema de código',
          result: "false"
        },
        {
          id: 6,
          quest: 'É correto o que se afirma em: defeito é oposto do bug.',
          result: "false"
        },
        {
          id: 7,
          quest: 'Em qualidade de software a sequência dos eventos ocorre respectivamente: erro -> defeito -> falha.',
          result: "true"
        },
        {
          id: 8,
          quest: 'É correto o que se afirma em: Qualidade de software não está ligada a atender as expectativas do cliente.',
          result: "false"
        },
        {
          id: 9,
          quest: 'É correto o que se afirma em: a qualidade é subjetiva.',
          result: "true"
        },
        {
          id: 10,
          quest: 'É correto o que se afirma em: a qualidade depende do cliente e da aplicação.',
          result: "true"
        },
        {
          id: 11,
          quest: 'É correto o que se afirma em: qualidade e bugs são opostos.',
          result: "true"
        },
        {
          id: 12,
          quest: 'É correto o que se afirma em: isolar um defeito , consiste em determinar sobre quais condições ele ocorre.',
          result: "true"
        },
        {
          id: 13,
          quest: 'A qualidade de software não está relacionada à conformidade com os requisitos.',
          result: "false"
        },
        {
          id: 14,
          quest: 'A qualidade do processo não influencia na qualidade do produto.',
          result: "false"
        },
        {
          id: 15,
          quest: 'Os defeitos são mais presentes nos requisitos do produto.',
          result: "true"
        },
        {
          id: 16,
          quest: 'Os defeitos na qualidade produzem: retrabalho, aumento de custos e satisfação do cliente.',
          result: "false"
        },
        {
          id: 17,
          quest: 'É correto que se afirma em: As atividades de verificação e validação não servem para segurar que o software funcione de acordo com o que foi especificado pelos stakeholders.',
          result: "false"
        },
        {
          id: 18,
          quest: 'A verificação simboliza demonstrar que a saída de uma fase do desenvolvimento é correta.',
          result: "false"
        },
        {
          id: 19,
          quest: 'É correto o que se afirma em: é recomendável que o programador teste o seu código.',
          result: "false"
        },
        {
          id: 20,
          quest: 'É correto o que se afirma em : o teste caixa-branca permite ao avaliador: concentrar atenção nos pontos mais importantes do códigos.',
          result: "true"
        },
        {
          id: 21,
          quest: 'A definição de normas como base para especificar produtos, organizar fornecimentos de serviços e para elaborar a legislação de serviços, está correta.',
          result: "true"
        },
        {
          id: 22,
          quest: 'CMM é um modelo de capacitação para desenvolvimento de um software.',
          result: "false"
        },
        {
          id: 23,
          quest: 'CMM é um modelo de capacitação para processo de software.',
          result: "true"
        },
        {
          id: 24,
          quest: 'A normalização é o processo de formulação e aplicação de regras para a solução ou prevenção de problemas, com a cooperação de todos os interessados, e em particular, para a promoção da economia global.',
          result: "true"
        },
        {
          id: 25,
          quest: 'Com relação a integração de componentes: existem duas vertentes principais para o desenvolvimento de software, as abordagens bottom-up e top-down.',
          result: "true"
        },
        {
          id: 26,
          quest: 'As ferramentas de depuração possibilitam codificar e testar o programa sem precisar trocar de ferramenta.',
          result: "true"
        },
        {
          id: 27,
          quest: 'Sigla que representa melhorias de processos de software brasileiro : MPS.br.',
          result: "true"
        },
        {
          id: 28,
          quest: 'Testes são fundamentais para garantir a qualidade de sistemas. No entanto, são caros e muitas vezes deixados de lado.',
          result: "true"
        },
        {
          id: 29,
          quest: 'O teste de recuperação força o software a falhar de diversas maneiras mas não verifica se a recuperação é adequadamente executada.',
          result: "false"
        },
        {
          id: 30,
          quest: 'A validação é bem-sucedida quando o software funciona de uma maneira razoavelmente esperada pelo cliente.',
          result: "true"
        },
        {
          id: 31,
          quest: 'Teste de unidade, teste de integração e teste de sistema são considerados estratégias de teste.',
          result: "true"
        },
        {
          id: 32,
          quest: 'Teste de validação não é considerado uma estratégia de teste.',
          result: "false"
        },
        {
          id: 33,
          quest: 'A caixa-cinza não é considerado o ponto de equilíbrio virtual entre o teste de caixa-branca e o caixa-preta.',
          result: "false"
        },
        {
          id: 34,
          quest: 'Garantia de qualidade de software é algo que deve ser considerado apenas na fase de testes do desenvolvimento, com a finalidade de atingir padrões de qualidade aceitáveis.',
          result: "false"
        },
        {
          id: 35,
          quest: 'No controle de qualidade de software podemos utilizar a técnica de engenharia de software conhecida como revisão em pares.',
          result: "true"
        },
        {
          id: 36,
          quest: 'Controle de qualidade é: garantir que os resultados estão conforme o especificado.',
          result: "true"
        },
        {
          id: 37,
          quest: 'Garantia de qualidade é: garantir que os resultados estão conforme o especificado.',
          result: "false"
        }
      ]
    }
  },
  methods: {
    onSubmit: function(){
      $('#modal').modal('hide')
      this.inicio = false
      this.ganhador = {}
    },
    selectQuest: function() {
      var quest = Math.floor(Math.random() * (37 - 1 + 1) + 1)
      if(this.questoes_respondidas.indexOf(quest) == -1){
        this.questao_atual = this.questoes[this.questoes.findIndex(i => i.id === quest)]
        this.questoes_respondidas.push(quest)
      }else{
        this.selectQuest()
      }
    },
    sendResponse(){
        if(this.questao_atual.result == this.resposta){
          if(this.jogador_atual == 1){
            this.part1.acertos += 1
            if(this.part1.acertos == 10){
              this.ganhador = this.part1
              $('#exampleModalCenter').modal('show')
              this.resetGame()
            }
          }else if(this.jogador_atual == 2){
            this.part2.acertos += 1
            if(this.part2.acertos == 10){
              this.ganhador = this.part2
              $('#exampleModalCenter').modal('show')
              this.resetGame()
            }
          }
          this.$snotify.success("Parabéns, você acertou!", 'Acertou')
          this.resposta = ""
          this.selectQuest()
        }else{
          if(this.jogador_atual == 1){
            this.part1.inicio = false
            this.jogador_atual = 2
          }else if(this.jogador_atual == 2){
            this.part2.inicio = false
            this.jogador_atual = 1
          }
          this.$snotify.error('Você errou, a vez é do outro participante!', 'Errou')
          this.resposta = ""
          this.selectQuest()
        }
    },
    resetGame(){
      this.jogador_atual= Math.floor(Math.random() * (2 - 1 + 1) + 1)
      this.resposta= ""
      this.questao_atual = {}
      this.questoes_respondidas = []
      this.part1.acertos = 0
      this.part1.inicio = true
      this.part2.acertos = 0
      this.part2.inicio = true
      this.inicio = true
    }
  },
  mounted(){
    this.selectQuest()
  }
}
</script>

<style>

@import "~vue-snotify/styles/material.css";

.bloco{border: 1px solid gray;}

</style>
