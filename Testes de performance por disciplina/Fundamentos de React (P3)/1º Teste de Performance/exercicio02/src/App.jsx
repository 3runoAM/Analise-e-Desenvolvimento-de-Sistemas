import './App.css'

export default function App() {

    return (<>
        <div>
            <h1>Histórico do ReactJs</h1>
            <dl>
                <div>
                    <dt>2010 – Os primeiros sinais do React</dt>
                    <dd>O Facebook introduziu o XHP na sua stack PHP e disponibilizou-o como open source.
                        O XHP permitia criar componentes compostos. Esta sintaxe foi posteriormente introduzida no
                        React.
                    </dd>
                </div>
                <div>
                    <dt>2011 – Um protótipo inicial do React</dt>
                    <dd>Jordan Walke criou o FaxJS - o protótipo inicial do React – e o usou para implementar um elemento de busca no
                        Facebook.
                    </dd>
                </div>
                <div>
                    <dt>2012 – Algo novo começava no Facebook</dt>
                    <dd>Os anúncios do Facebook tornaram-se difíceis de gerir, levando a empresa a buscar uma solução
                        robusta. Jordan Walke desenvolveu o protótipo e criou o React. Nesse mesmo ano, o Instagram foi
                        adquirido pelo Facebook e almejava utilizar o React para compor a suas interfaces. Esse
                        movimento mercadológico pressionou o Facebook a desacoplar o React da sua infraestrutura e
                        torná-lo open source.
                    </dd>
                </div>
                <div>
                    <dt>2013 – O ano do Grande Lançamento</dt>
                    <dd>O React é lançado como open source. Com o passar dos meses, a comunidade passa a adotar a
                        biblioteca, logo o React estava disponível no JSFiddle, junto do JSX era compatível com Ruby on
                        Rails, além de estarem disponíveis para aplicações Python.
                    </dd>
                </div>
                <div>
                    <dt>2014 – O ano da Expansão</dt>
                    <dd>O React gradualmente ganhou reputação e começou a atingir a "maioria precoce" de usuários. O
                        marketing do framework era voltado aos benefícios técnicos e visavam atingir empresas como a
                        Netflix. Nesse mesmo ano, o React Developer Tools torna-se uma extensão do Chrome DevTools,
                        surge o ReactiveX.io, Lançamento do React Hot Loader (plugin que permite recarregar componentes
                        React em tempo real sem perda de estado) e entre outros.
                    </dd>
                </div>
                <div>
                    <dt>2015 – React está Estável</dt>
                    <dd>O Facebook lança a primeira versão do React Native e anuncia que o código do React Native para
                        iOS está aberto e disponível no GitHub. Netflix e Airbnb adotam e recomendam o React.</dd>
                </div>
            </dl>
        </div>
    </>)
}