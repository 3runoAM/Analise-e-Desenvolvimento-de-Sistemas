const survey = prompt("Entre a pergunta da enquete: ");

const votingPool = new VotingPool(survey);

votingPool.initiateVoting();
votingPool.calculateResults();

const results = votingPool.getResults();

alert(`Votos totais: ${results.totalVotes}\n
Responderam sim: ${results.yesPercentage}% (${results.yesCount} votos)\n
Responderam não: ${results.noPercentage}% (${results.noCount} votos)\n
Mais detalhes no console ;)`);

/**/

function Vote(name, answer) {
    this.name = name;
    this.answer = answer;
    this.toString = () => {
        return `${this.name} votou ${this.answer}`;
    }
}

function VotingPool(survey) {
    this.survey = survey;
    this.votes = [];
    
    this.results = {
        totalVotes: 0,
        yesCount: 0,
        noCount: 0,
        yesPercentage: 0,
        noPercentage: 0,
    }
    
    this.initiateVoting = () => {
        do {
            const name = prompt("Qual o seu nome?");

            if(!name) break;
            const currentVote = new Vote(name);

            const invalidAnswerPredicate = (answer) => answer !== "sim" && answer !== "não";
            let answer = ""
            while(invalidAnswerPredicate(answer)) {
                answer = prompt(this.survey + "\nDigite 'sim' ou 'não' para responder: ");
                answer = answer.toLowerCase();
            }

            currentVote.answer = answer;
            this.votes.push(currentVote);
        } while(true)
        alert("Votação encerrada!");
    };
    
    this.calculateResults = () => {
        let yesCount = 0;
        let noCount = 0;

        console.log(`Enquete: ${this.survey}`);
        for(let vote of this.votes) {
            vote.answer === "sim" ? yesCount++ : noCount++;
            console.log("\t" + vote.toString());
        }

        this.results.totalVotes = this.votes.length;
        this.results.yesCount = yesCount;
        this.results.noCount = noCount;
        this.results.yesPercentage = Math.round((this.results.yesCount / this.results.totalVotes) * 100);
        this.results.noPercentage = Math.round((this.results.noCount / this.results.totalVotes) * 100);
    };

    this.getResults = () => {
        return this.results;
    };
}