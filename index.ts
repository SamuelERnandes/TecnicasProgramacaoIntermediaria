function calcularContaEnergia(
  consumoKWh: number,
  tarifaBasica: number,
  impostoPercentual: number,
  bandeira: 'verde' | 'amarela' | 'vermelha'
): number {
  const valorBase = consumoKWh * tarifaBasica;

  const acrescimoBandeira =
    bandeira === 'amarela'
      ? 0.02 * consumoKWh
      : bandeira === 'vermelha'
      ? 0.05 * consumoKWh
      : 0;

  const valorTotal = valorBase + acrescimoBandeira;

  const imposto = (impostoPercentual / 100) * valorTotal;
  const valorFinal = valorTotal + imposto;

  return parseFloat(valorFinal.toFixed(2));
}

const consumo: number = 200;
const tarifa: number = 0.5;
const imposto: number = 15;
const bandeira: 'verde' | 'amarela' | 'vermelha' = 'vermelha';

console.log(calcularContaEnergia(consumo, tarifa, imposto, bandeira));
