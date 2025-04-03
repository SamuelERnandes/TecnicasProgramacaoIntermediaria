describe('Validação de CPF', () => {
  test('CPF válido', () => {
    expect(validarCPF('12345678909')).toBe(true);
  });

  test('CPF inválido com dígitos errados', () => {
    expect(validarCPF('12345678900')).toBe(false);
  });

  test('CPF com menos de 11 dígitos', () => {
    expect(validarCPF('12345')).toBe(false);
  });

  test('CPF com caracteres não numéricos', () => {
    expect(validarCPF('123.456.789-09')).toBe(true);
  });

  test('CPF com sequência repetida de números', () => {
    expect(validarCPF('11111111111')).toBe(false);
  });
});
