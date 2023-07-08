import './App.css';
import Loja from './app/Loja'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {
  return (
    <div className="App">
      <header className="App-header layer">
        <Loja/>
      </header>
      <footer class="bg-dark text-center text-white"> 
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-secondary">
          <div class="me-5 d-none d-lg-block">
            <span>Obrigado por visitar o nosso website</span>
          </div>
        </section>
        <section class="">
          <div class="container text-center text-md-start mt-5">
            
            <div class="row mt-3">
             
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Trabalho Info
                </h6>
                <h6>Desenvolvimento Web 2022/23</h6>
                <h6> Engenharia Informática</h6>
                <h6>Autores:</h6>
                <h6>23031 - Dinis Silva</h6>
                <h6>23035 - Francisco Silva</h6> 
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Bibliotecas
                </h6>
                <p>
                  <a href="https://getbootstrap.com/" class="text-reset">bootstrap</a>
                </p>
                <p>
                  <a href="https://react.dev/" class="text-reset">React</a>
                </p>
                <p>
                  <a href="https://localhost:7294/Home/Privacy" class="text-reset">API</a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Navegar
                </h6>
                <p>
                  <a href="#" class="text-reset " data-bs-toggle='offcanvas' data-bs-target='#sidebar' aria-controls='sidebar'>Log in</a>
                </p>
                <p>
                  <a href="#" class="text-reset"  data-bs-toggle='offcanvas' data-bs-target='#sidebar' aria-controls='sidebar'>Registar</a>
                </p>
                <p>
                  <a href="#" class="scroll-top text-reset" >Inicio</a>
                </p>

              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contato</h6>
                <p><i class="fas fa-envelope me-3"></i> aluno23031@ipt.pt</p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  aluno23035@ipt.pt
                </p>
    
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-3" style={{backgroundColor:' rgba(0, 0, 0, 0.2)'}}>
        © 2023 - ReparaTech - <a> </a>
          <a class="text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop" href="#">Política de Privacidade</a>
        </div>
      </footer>
      <div class="modal fade modal-xl"id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content"  style={{backgroundColor: "#28242c"}}>
            <div class="modal-header text-white border-bottom border-secondary">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Política de Privacidade</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-start  ">
              <p><span className="text-white">A sua privacidade é importante para nós. É política do ReparaTECH respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site ReparaTECH, e outros sites que possuímos e operamos.</span></p>
              <p><span className="text-white">Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</span></p>
              <p><span className="text-white">Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</span></p>
              <p><span className="text-white">Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</span></p>
              <p><span className="text-white">O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas <a href="https://politicaprivacidade.com/" rel="noopener noreferrer" target="_blank" className="text-white">políticas de privacidade</a>.</span></p>
              <p><span className="text-white">Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</span></p>
              <p><span className="text-white">O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</span></p>
              <p></p>
              <h3><span className="text-white">Compromisso do Usuário</span></h3>
              <p><span className="text-white">O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o ReparaTECH oferece no site e com caráter enunciativo, mas não limitativo:</span></p>
              <ul className="text-white">
                <li><span className="text-white">A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</span></li>
                <li><span className="text-white">B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</span></li>
                <li><span className="text-white">C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do ReparaTECH, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</span></li>
              </ul>
              <h3><span className="text-white">Mais informações</span></h3>
              <p><span className="text-white">Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</span></p>
              <p></p>
            </div>
            <div class="modal-footer border-top border-secondary">
              <button type="button" class="btn  btn-secondary" data-bs-dismiss="modal">Entendi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
