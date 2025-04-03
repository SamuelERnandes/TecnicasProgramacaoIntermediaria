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

function calcularDescontoOuAcrescimo(
  consumo: number,
  valorTotal: number
): number {
  if (consumo <= 100) {
    return -0.05 * valorTotal;
  } else if (consumo > 300) {
    return 0.1 * valorTotal;
  }
  return 0;
}

function calcularContaEnergia(consumo: ConsumoEnergia): number {
  const valorBase = calcularValorBase(consumo.kwh, consumo.tarifa);
  const ajusteBandeira = calcularAjusteBandeira(consumo.kwh, consumo.bandeira);
  let valorTotal = valorBase + ajusteBandeira;
  const valorImposto = calcularImposto(valorTotal, consumo.imposto);
  valorTotal += valorImposto;

  const ajusteConsumo = calcularDescontoOuAcrescimo(consumo.kwh, valorTotal);
  const valorFinal = valorTotal + ajusteConsumo;

  return parseFloat(valorFinal.toFixed(2));
}

const consumo: ConsumoEnergia = {
  kwh: 200,
  tarifa: 0.5,
  imposto: 15,
  bandeira: 'vermelha',
};

console.log(calcularContaEnergia(consumo));
