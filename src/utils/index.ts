export class formatFileds {
  static cpf(cpf: string, input: HTMLInputElement) {
    cpf = cpf.slice(0, 14).replace(/[^\d]/g, "");

    if (cpf.length > 9) {
      input.value = cpf.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
    } else if (cpf.length > 6) {
      input.value = cpf.replace(/(\d{3})(\d{3})/, "$1.$2.");
    } else if (cpf.length > 3) {
      input.value = cpf.replace(/(\d{3})/, "$1.");
    } else {
      input.value = cpf;
    }
  }

  static phone(phone: string, input: HTMLInputElement) {
    phone = phone.slice(0, 15).replace(/[^\d]/g, "");

    if (phone.length > 7) {
      input.value = phone.replace(/(\d{2})(\d{5})/, "($1) $2-");
    } else if (phone.length > 2) {
      input.value = phone.replace(/(\d{2})/, "($1) ");
    } else {
      input.value = phone;
    }
  }

  static birthdate(birthdate: string, input: HTMLInputElement) {
    birthdate = birthdate.slice(0, 10).replace(/[^\d]/g, "");

    if (birthdate.length > 4) {
      input.value = birthdate.replace(/(\d{2})(\d{2})/, "$1/$2/");
    } else if (birthdate.length > 2) {
      input.value = birthdate.replace(/(\d{2})/, "$1/");
    } else {
      input.value = birthdate;
    }
  }

  static cep(cep: string, input: HTMLInputElement) {
    cep = cep.slice(0, 9).replace(/[^\d]/g, "");

    input.value = cep.replace(/(\d{5})/, "$1.");
  }

  static price(price: string, input: HTMLInputElement) {
    price = price.slice(0, 16).replace(/[^\d]/g, "");
    price = price.replace(/(\d{1,2})$/, ",$1");
    price = price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    input.value = price;
  }

  static year(year: string, input: HTMLInputElement) {
    const numbers = "1234567890";
    year = year
      .split("")
      .filter((number) => numbers.includes(number))
      .join("");

    input.value = year;
  }
}
