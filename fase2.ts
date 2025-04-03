interface ConsumoEnergia {
  kwh: number;
  tarifa: number;
  imposto: number;
  bandeira: 'verde' | 'amarela' | 'vermelha';
}

function calcularValorBase(consumo: number, tarifa: number): number {
  return consumo * tarifa;
}

function calcularAjusteBandeira(consumo: number, bandeira: string): number {
  return bandeira === 'amarela'
    ? 0.02 * consumo
    : bandeira === 'vermelha'
    ? 0.05 * consumo
    : 0;
}

function calcularImposto(valor: number, percentualImposto: number): number {
  return (percentualImposto / 100) * valor;
}

function calcularContaEnergia(consumo: ConsumoEnergia): number {
  const valorBase = calcularValorBase(consumo.kwh, consumo.tarifa);
  const ajusteBandeira = calcularAjusteBandeira(consumo.kwh, consumo.bandeira);
  const valorTotal = valorBase + ajusteBandeira;
  const valorImposto = calcularImposto(valorTotal, consumo.imposto);
  const valorFinal = valorTotal + valorImposto;

  return parseFloat(valorFinal.toFixed(2));
}

const consumo: ConsumoEnergia = {
  kwh: 200,
  tarifa: 0.5,
  imposto: 15,
  bandeira: 'vermelha',
};

console.log(calcularContaEnergia(consumo));
