function validarCPF(cpf: string): boolean {
  cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Verifica tamanho e sequências repetidas

  const calcularDigito = (base: number) => {
    let soma = 0;
    for (let i = 0; i < base; i++) {
      soma += parseInt(cpf.charAt(i)) * (base + 1 - i);
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  return (
    calcularDigito(9) === parseInt(cpf.charAt(9)) &&
    calcularDigito(10) === parseInt(cpf.charAt(10))
  );
}
