namespace teste {
    const numero1: number = 10;
    const numero2: number = 15;
    const nome: string = "Keivisson"
    
    function multiplicar (n1: number, n2: number): number{
        return n1 * n2 ;
    }
    
    function saudacao (nome: string): string{
        return "Olá " + nome;
    }
    
    console.log(multiplicar(numero1,numero2));
    console.log(saudacao(nome));
}