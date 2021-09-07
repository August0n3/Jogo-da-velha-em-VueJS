new Vue({
  el: "#jogo",
  data: {
    jogadas: 0,
    jogador: 0,
    vez: 'O',
    resultado:'',
    botao: 0,
    ganhar: 0,
    ganhou: 0,
    
  },
  methods: {

    clique(event) {
      // definindo css
      var element = event.target

      if (
        element.style.backgroundImage == "" ||
        element.style.backgroundImage == null
      ) {
        var endereco = "img/" + this.jogador + ".jpg"
        element.style.backgroundImage = "url(" + endereco + ")"
        this.jogadas += 1
      
      var numero_casa = element.id[4]
      if(this.jogadas >= 5){
      this.ganhou = this.verificarGanhador(numero_casa)
      }
      switch(this.ganhou)
		{
			case 1:
				if(this.jogador == 0){
				  this.resultado = 'Resultado: o "O" Ganhou!'
          
				}else{
				  this.resultado = 'Resultado: o "X" Ganhou!'					
				}
				break
			case -1:
				  this.resultado = 'Resultado: Empate!'					
				break
			case 0:
				// ninguem ganhou ainda
				break
		}

  
      //aleternar vez
      if (this.jogador == 0){
          this.vez = 'X'
          this.jogador = 1
      }else
      {
        this.vez = 'O'
        this.jogador = 0
      }

      //terminar
        if (this.ganhou != 0){
          this.ganhar = 1
          this.botao = 1 
    
      }
    }
    },verificarGanhador(id){
        console.log(id)
          const possi = {
            '1': [[1, 2, 3], [1, 4, 7], [1, 5, 9]],
            '2': [[1, 2, 3], [2, 5, 8]],
            '3': [[1, 2, 3], [3, 6, 9], [3, 5, 7]],
            '4': [[4, 5, 6], [1, 4, 7]],
            '5': [[4, 5, 6], [2, 5, 8], [1, 5, 9], [3, 5, 7]],
            '6': [[4, 5, 6], [3, 6, 9]],
            '7': [[7, 8, 9], [1, 4, 7], [7, 5, 3]],
            '8': [[7, 8, 9], [2, 5, 8]],
            '9': [[7, 8, 9], [3, 6, 9], [1, 5, 9]]}
            casas = document.getElementsByClassName('casa')
            let check = possi[id]
      
            for (let i = 0; i < check.length; i++) {
              const [a, b, c] = check[i]
      
              if( casas[a-1].style.backgroundImage === casas[b-1].style.backgroundImage &&
                casas[a-1].style.backgroundImage === casas[c-1].style.backgroundImage &&
                casas[a-1].style.backgroundImage != '') {	
                return 1
      
              }									
            }
              if (this.jogadas == 9){
                return -1
              }else{
                return 0
              }
      

        },
        iniciar(){
          this.ganhar = 0
          this.botao = ''
          this.resultado = ''
          this.ganhou = 0
          this.jogadas = 0
        },
    }
  });
