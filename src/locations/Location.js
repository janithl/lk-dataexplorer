class Location {
  constructor(data) {
    this.code = data.code;
    this.type = data.type;
    this.name = {
      en: data["name-en"],
      si: data["name-si"],
      ta: data["name-ta"]
    };

    if (data.parent) {
      this.parent = data.parent;
    }
  }

  getCode() {
    return this.code;
  }

  getFullName(lang = "en") {
    if (lang === "en") {
      return [this.name.en, this.type].join(" ");
    }

    return this.name[lang];
  }
}

export default Location;
