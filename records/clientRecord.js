const { ValidationError } = require('../utils/errors');

class ClientRecord {
  constructor({
    id, mail, name, nextContactAt, notes,
  }) {
    if (!name || typeof name !== 'string' || name.length < 3) {
      throw new ValidationError('Podaj poprawne imię');
    }

    if (typeof id !== 'string') {
      throw new ValidationError('Podany klient nie istnieje!');
    }
    if (!mail || typeof mail !== 'string' || mail.indexOf('@') === -1) {
      throw new ValidationError('Podaj prawidłowy adres e-mail.');
    }
    if (typeof nextContactAt !== 'string') {
      throw new ValidationError('Notatki tylko jako tekst');
    }

    this.id = id;
    this.mail = mail;
    this.name = name;
    this.nextContactAt = nextContactAt;
    this.notes = notes;
  }
}

module.exports = { ClientRecord };
