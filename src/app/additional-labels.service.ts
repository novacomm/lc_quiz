import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class AdditionalLabelsService {
    window: any;
    _language: string;
    constructor(
        @Inject(DOCUMENT) private document: Document,
    ) {
        this.window = this.document.defaultView;
        this._language = this.window.document.getElementsByTagName('html')[0].getAttribute('lang');

    }

    getLabel(section, key) {
        return this.staticLabels[this._language][section][key]
    }


    getLabels(section) {
        return this.staticLabels[this._language][section]
    }

    staticLabels = {
    "bg": {
        "miscelaneous": {
            "body_congratulations_post": " \u0440\u0430\u0437\u0434\u0435\u043b.",
            "body_congratulations_pre": "\u0422\u0438 \u0437\u0430\u0432\u044a\u0440\u0448\u0438 ",
            "bronze_body_feedback": "<p>\u0427\u0443\u0434\u0435\u0441\u043d\u043e! \u041d\u043e \u043c\u043e\u0436\u0435\u0448 \u0434\u0430 \u043d\u0430\u0443\u0447\u0438\u0448 \u043e\u0449\u0435 \u043c\u043d\u043e\u0433\u043e \u0437\u0430 \u0415\u0421.</p>\n<p><strong>\u0418\u0441\u043a\u0430\u0448 \u043b\u0438 \u0434\u0430 \u043e\u043f\u0438\u0442\u0430\u0448 \u043e\u0442\u043d\u043e\u0432\u043e \u0441 \u0442\u043e\u0437\u0438 \u0438\u043b\u0438 \u0441 \u0434\u0440\u0443\u0433 \u0440\u0430\u0437\u0434\u0435\u043b \u0441 \u043d\u043e\u0432\u0438 \u0432\u044a\u043f\u0440\u043e\u0441\u0438? \u0418\u0437\u0431\u0435\u0440\u0438 \u0442\u0435\u043c\u0430.</strong> \u0418\u043c\u0430\u0448 \u043f\u0440\u0430\u0432\u043e \u043d\u0430 \u0434\u0432\u0430 \u043e\u043f\u0438\u0442\u0430, \u0437\u0430 \u0434\u0430 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0438\u0448 \u043d\u0430 \u0432\u0441\u0435\u043a\u0438 \u0432\u044a\u043f\u0440\u043e\u0441. \u041f\u0440\u0430\u0432\u0438\u043b\u0435\u043d \u043e\u0442\u0433\u043e\u0432\u043e\u0440 \u043f\u0440\u0438 \u043f\u044a\u0440\u0432\u0438\u044f \u043e\u043f\u0438\u0442 \u0442\u0438 \u0434\u0430\u0432\u0430 \u0434\u0432\u0435 \u0442\u043e\u0447\u043a\u0438, \u0430 \u043f\u0440\u0438 \u0432\u0442\u043e\u0440\u0438 \u043e\u043f\u0438\u0442 \u2014 \u0435\u0434\u043d\u0430 \u0442\u043e\u0447\u043a\u0430.</p>\n<p>\u0418\u0441\u043a\u0430\u0448 \u043b\u0438 \u0434\u0430 <a href=\"https://europa.eu/european-union/about-eu_bg\">\u043f\u0440\u043e\u0447\u0435\u0442\u0435\u0448 \u043f\u043e\u0432\u0435\u0447\u0435 \u0437\u0430 \u0415\u0421?</a></p>",
            "button_answer": "\u041e\u0442\u0433\u043e\u0432\u043e\u0440",
            "button_back_to_question": "\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a\u044a\u043c \u0432\u044a\u043f\u0440\u043e\u0441\u0430",
            "button_next_question": "\u0421\u043b\u0435\u0434\u0432\u0430\u0449 \u0432\u044a\u043f\u0440\u043e\u0441",
            "button_see_the_results": "\u0412\u0438\u0436\u0442\u0435 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442\u0438\u0442\u0435",
            "button_start": "\u041d\u0430\u0447\u0430\u043b\u043e",
            "gold_body_feedback": "<p>\u0411\u0440\u0430\u0432\u043e, \u0442\u0438 \u0441\u0438 \u0438\u0441\u0442\u0438\u043d\u0441\u043a\u0438 \u0435\u043a\u0441\u043f\u0435\u0440\u0442 \u043f\u043e \u0415\u0421!</p>\n<p>\u0418\u0441\u043a\u0430\u0448 \u043b\u0438 \u0434\u0430 \u043e\u043f\u0438\u0442\u0430\u0448 \u0434\u0440\u0443\u0433 \u0440\u0430\u0437\u0434\u0435\u043b \u0441 \u043d\u043e\u0432\u0438 \u0432\u044a\u043f\u0440\u043e\u0441\u0438? \u0418\u0437\u0431\u0435\u0440\u0438 \u043d\u043e\u0432\u0430 \u0442\u0435\u043c\u0430.<br> \u0418\u043c\u0430\u0448 \u043f\u0440\u0430\u0432\u043e \u043d\u0430 \u0434\u0432\u0430 \u043e\u043f\u0438\u0442\u0430, \u0437\u0430 \u0434\u0430 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0438\u0448 \u043d\u0430 \u0432\u0441\u0435\u043a\u0438 \u0432\u044a\u043f\u0440\u043e\u0441. \u041f\u0440\u0430\u0432\u0438\u043b\u0435\u043d \u043e\u0442\u0433\u043e\u0432\u043e\u0440 \u043f\u0440\u0438 \u043f\u044a\u0440\u0432\u0438\u044f \u043e\u043f\u0438\u0442 \u0442\u0438 \u0434\u0430\u0432\u0430 \u0434\u0432\u0435 \u0442\u043e\u0447\u043a\u0438, \u0430 \u043f\u0440\u0438 \u0432\u0442\u043e\u0440\u0438 \u043e\u043f\u0438\u0442 \u2014 \u0435\u0434\u043d\u0430 \u0442\u043e\u0447\u043a\u0430.</p>\n<p>\u0418\u0441\u043a\u0430\u0448 \u043b\u0438 \u0434\u0430 <a href=\"https://europa.eu/european-union/about-eu_bg\">\u043f\u0440\u043e\u0447\u0435\u0442\u0435\u0448 \u043f\u043e\u0432\u0435\u0447\u0435 \u0437\u0430 \u0415\u0421?</a></p>",
            "heading_congratulations": "\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f!",
            "label_question": "\u0412\u044a\u043f\u0440\u043e\u0441",
            "label_try_again": "\u041e\u043f\u0438\u0442\u0430\u0439 \u043e\u0442\u043d\u043e\u0432\u043e",
            "label_your_score": "\u0422\u0432\u043e\u044f\u0442 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442",
            "link_privacy_statement": "\u0414\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0438\u044f \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442",
            "silver_body_feedback": "<p>\u0421\u043f\u0440\u0430\u0432\u044f\u0448 \u0441\u0435 \u043d\u0430\u0438\u0441\u0442\u0438\u043d\u0430 \u0434\u043e\u0431\u0440\u0435, \u043d\u043e \u0438\u043c\u0430 \u043e\u0449\u0435 \u0442\u043e\u043b\u043a\u043e\u0432\u0430 \u043c\u043d\u043e\u0433\u043e \u043d\u0435\u0449\u0430, \u043a\u043e\u0438\u0442\u043e \u0434\u0430 \u043d\u0430\u0443\u0447\u0438\u0448 \u0437\u0430 \u0415\u0421.</p>\n<p>\u0418\u0441\u043a\u0430\u0448 \u043b\u0438 \u0434\u0430 \u043e\u043f\u0438\u0442\u0430\u0448 \u0434\u0440\u0443\u0433 \u0440\u0430\u0437\u0434\u0435\u043b \u0441 \u043d\u043e\u0432\u0438 \u0432\u044a\u043f\u0440\u043e\u0441\u0438? \u0418\u0437\u0431\u0435\u0440\u0438 \u043d\u043e\u0432\u0430 \u0442\u0435\u043c\u0430. \u0418\u043c\u0430\u0448 \u043f\u0440\u0430\u0432\u043e \u043d\u0430 \u0434\u0432\u0430 \u043e\u043f\u0438\u0442\u0430, \u0437\u0430 \u0434\u0430 \u043e\u0442\u0433\u043e\u0432\u043e\u0440\u0438\u0448 \u043d\u0430 \u0432\u0441\u0435\u043a\u0438 \u0432\u044a\u043f\u0440\u043e\u0441. \u041f\u0440\u0430\u0432\u0438\u043b\u0435\u043d \u043e\u0442\u0433\u043e\u0432\u043e\u0440 \u043f\u0440\u0438 \u043f\u044a\u0440\u0432\u0438\u044f \u043e\u043f\u0438\u0442 \u0442\u0438 \u0434\u0430\u0432\u0430 \u0434\u0432\u0435 \u0442\u043e\u0447\u043a\u0438, \u0430 \u043f\u0440\u0438 \u0432\u0442\u043e\u0440\u0438 \u043e\u043f\u0438\u0442 \u2014 \u0435\u0434\u043d\u0430 \u0442\u043e\u0447\u043a\u0430.</p>\n<p>\u0418\u0441\u043a\u0430\u0448 \u043b\u0438 \u0434\u0430 <a href=\"https://europa.eu/european-union/about-eu_bg\">\u043f\u0440\u043e\u0447\u0435\u0442\u0435\u0448 \u043f\u043e\u0432\u0435\u0447\u0435 \u0437\u0430 \u0415\u0421?</a></p>"
        }
    },
    "cs": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Dokon\u010dili jste \u010d\u00e1st ",
            "bronze_body_feedback": "<p>Dob\u0159e. O EU se je\u0161t\u011b m\u016f\u017eete dozv\u011bd\u011bt mnoho dal\u0161\u00edch zaj\u00edmav\u00fdch v\u011bc\u00ed.</p><p>Chcete to zkusit znovu, nebo p\u0159ej\u00edt na jinou \u010d\u00e1st, s nov\u00fdmi dotazy? Zvolte t\u00e9ma: Na zodpov\u011bzen\u00ed ka\u017ed\u00e9 ot\u00e1zky budete m\u00edt dva pokusy. Za spr\u00e1vnou odpov\u011b\u010f na prvn\u00ed pokus z\u00edsk\u00e1v\u00e1te dva body, na druh\u00fd pokus jeden bod.</p><p>Chcete se <a href=\"https://europa.eu/european-union/about-eu_cs\">o EU dozv\u011bd\u011bt v\u00edce?</a></p>",
            "button_answer": "Odpov\u011b\u010f",
            "button_back_to_question": "Zp\u011bt na\u00a0ot\u00e1zku",
            "button_next_question": "Dal\u0161\u00ed ot\u00e1zka",
            "button_see_the_results": "Zobrazit v\u00fdsledky",
            "button_start": "Za\u010d\u00edt",
            "gold_body_feedback": "<p>V\u00fdborn\u011b \u2013 jste opravdu <strong>odborn\u00edk na&nbsp;EU</strong>!</p><p><strong>Chcete si vyzkou\u0161et jinou \u010d\u00e1st, s&nbsp;nov\u00fdmi ot\u00e1zkami? Zvolte si nov\u00e9 t\u00e9ma:</strong><br>Na&nbsp;zodpov\u011bzen\u00ed ka\u017ed\u00e9 ot\u00e1zky m\u00e1te dva pokusy. Za spr\u00e1vnou odpov\u011b\u010f na prvn\u00ed pokus z\u00edsk\u00e1v\u00e1te dva body, na druh\u00fd pokus jeden bod.</p><p>Chcete se <a href=\"https://europa.eu/european-union/about-eu_cs\">o EU dozv\u011bd\u011bt v\u00edce?</a></p>",
            "heading_congratulations": "Blahop\u0159ejeme!",
            "label_question": "Question",
            "label_try_again": "Zkusit znovu",
            "label_your_score": "Sk\u00f3re",
            "link_privacy_statement": "Prohl\u00e1\u0161en\u00ed o ochran\u011b osobn\u00edch \u00fadaj\u016f",
            "silver_body_feedback": "<p>Hezk\u00fd v\u00fdsledek. St\u00e1le se v\u0161ak m\u016f\u017eete dozv\u011bd\u011bt mnoho dal\u0161\u00edch zaj\u00edmav\u00fdch v\u011bc\u00ed o EU.</p><p>Chcete si vyzkou\u0161et jinou \u010d\u00e1st, s&nbsp;nov\u00fdmi ot\u00e1zkami? Zvolte si nov\u00e9 t\u00e9ma: Na zodpov\u011bzen\u00ed ka\u017ed\u00e9 ot\u00e1zky budete m\u00edt dva pokusy. Za spr\u00e1vnou odpov\u011b\u010f na prvn\u00ed pokus z\u00edsk\u00e1v\u00e1te dva body, na druh\u00fd pokus jeden bod.</p><p>Chcete se <a href=\"https://europa.eu/european-union/about-eu_cs\">o EU dozv\u011bd\u011bt v\u00edce?</a></p>"
        }
    },
    "da": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Du er nu f\u00e6rdig med del ",
            "bronze_body_feedback": "<p>Super! Men der er stadig meget mere at l\u00e6re om EU.</p>\n<p>Vil du pr\u00f8ve igen eller fors\u00f8ge med en anden del med nye sp\u00f8rgsm\u00e5l? V\u00e6lg et emne. Du har to fors\u00f8g til at svare p\u00e5 hvert sp\u00f8rgsm\u00e5l. Rigtigt svar i f\u00f8rste fors\u00f8g giver to point og i andet fors\u00f8g \u00e9t point.</p>\n<p>Vil du <a href=\"https://europa.eu/european-union/about-eu_da\">l\u00e6se mere om EU?</a></p>",
            "button_answer": "Svar",
            "button_back_to_question": "Tilbage til sp\u00f8rgsm\u00e5let",
            "button_next_question": "N\u00e6ste sp\u00f8rgsm\u00e5l",
            "button_see_the_results": "Se resultaterne",
            "button_start": "Start",
            "gold_body_feedback": "<p>Flot klaret! Du er virkelig en EU-ekspert!</p>\n<p>Vil du pr\u00f8ve en del mere med nye sp\u00f8rgsm\u00e5l? V\u00e6lg et nyt emne.<br> Du har to fors\u00f8g til at svare p\u00e5 hvert sp\u00f8rgsm\u00e5l. Rigtigt svar i f\u00f8rste fors\u00f8g giver to point og i andet fors\u00f8g \u00e9t point.</p>\n<p>Vil du <a href=\"https://europa.eu/european-union/about-eu_da\">l\u00e6se mere om EU?</a></p>",
            "heading_congratulations": "Tillykke!",
            "label_question": "Question",
            "label_try_again": "Pr\u00f8v igen",
            "label_your_score": "Din score",
            "link_privacy_statement": "Databeskyttelseserkl\u00e6ring",
            "silver_body_feedback": "<p>Du g\u00f8r det virkelig godt, men der er stadig meget mere at l\u00e6re om EU.</p>\n<p><strong>Vil du pr\u00f8ve en del mere med nye sp\u00f8rgsm\u00e5l? V\u00e6lg et nyt emne.</strong> Du har to fors\u00f8g til at svare p\u00e5 hvert sp\u00f8rgsm\u00e5l. Rigtigt svar i f\u00f8rste fors\u00f8g giver to point og i andet fors\u00f8g \u00e9t point.</p>\n<p>Vil du <a href=\"https://europa.eu/european-union/about-eu_da\">l\u00e6se mere om EU?</a></p>"
        }
    },
    "de": {
        "miscelaneous": {
            "body_congratulations_post": " abgeschlossen.",
            "body_congratulations_pre": "Sie haben den Abschnitt ",
            "bronze_body_feedback": "<p>Sehr gut! Aber es gibt noch jede Menge \u00fcber die EU zu entdecken!</p><p>M\u00f6chten Sie es noch einmal versuchen oder Fragen zu einem anderen Thema beantworten? W\u00e4hlen Sie ein Thema. F\u00fcr die Beantwortung jeder Frage haben Sie zwei Versuche. F\u00fcr eine richtige Antwort gibt es beim ersten Versuch zwei Punkte, beim zweiten nur noch einen.</p><p>M\u00f6chten Sie <a href=\"https://europa.eu/european-union/about-eu_de\">mehr \u00fcber die EU erfahren?</a></p>",
            "button_answer": "Antwort",
            "button_back_to_question": "Zur\u00fcck zur Frage",
            "button_next_question": "N\u00e4chste Frage",
            "button_see_the_results": "Ergebnisse anzeigen",
            "button_start": "Start",
            "gold_body_feedback": "<p>Super \u2013 Sie kennen sich wirklich bei der EU-aus!</p><p>M\u00f6chten Sie sich an Fragen zu einem anderen Thema versuchen? W\u00e4hlen Sie ein neues Thema.<br>F\u00fcr die Beantwortung jeder Frage haben Sie zwei Versuche. F\u00fcr eine richtige Antwort gibt es beim ersten Versuch zwei Punkte, beim zweiten nur noch einen.</p><p>M\u00f6chten Sie <a href=\"https://europa.eu/european-union/about-eu_de\">mehr \u00fcber die EU erfahren?</a></p>",
            "heading_congratulations": "Gl\u00fcckwunsch!",
            "label_question": "Question",
            "label_try_again": "Neuer Versuch",
            "label_your_score": "Ihr Ergebnis",
            "link_privacy_statement": "Datenschutzerkl\u00e4rung",
            "silver_body_feedback": "<p>Das war schon sehr gut, aber es gibt noch so viel \u00fcber die EU zu entdecken.</p><p>M\u00f6chten Sie sich an Fragen zu einem anderen Thema versuchen? W\u00e4hlen Sie ein neues Thema. F\u00fcr die Beantwortung jeder Frage haben Sie zwei Versuche. F\u00fcr eine richtige Antwort gibt es beim ersten Versuch zwei Punkte, beim zweiten nur noch einen.</p><p>M\u00f6chten Sie <a href=\"https://europa.eu/european-union/about-eu_de\">mehr \u00fcber die EU erfahren?</a></p>"
        }
    },
    "el": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "\u039f\u03bb\u03bf\u03ba\u03bb\u03ae\u03c1\u03c9\u03c3\u03b5\u03c2 \u03c4\u03b7\u03bd \u03b5\u03bd\u03cc\u03c4\u03b7\u03c4\u03b1 ",
            "bronze_body_feedback": "<p>\u03a5\u03c0\u03ad\u03c1\u03bf\u03c7\u03b1! \u0391\u03bb\u03bb\u03ac \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd \u03b1\u03ba\u03cc\u03bc\u03b7 \u03c0\u03bf\u03bb\u03bb\u03ac \u03bd\u03b1 \u03bc\u03ac\u03b8\u03b5\u03b9\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u0395\u0395!</p>\n<p>\u0398\u03ad\u03bb\u03b5\u03b9\u03c2 \u03bd\u03b1 \u03be\u03b1\u03bd\u03b1\u03c0\u03c1\u03bf\u03c3\u03c0\u03b1\u03b8\u03ae\u03c3\u03b5\u03b9\u03c2 \u03ae \u03bd\u03b1 \u03b4\u03bf\u03ba\u03b9\u03bc\u03ac\u03c3\u03b5\u03b9\u03c2 \u03bc\u03b9\u03b1 \u03b1\u03ba\u03cc\u03bc\u03b7 \u03b5\u03bd\u03cc\u03c4\u03b7\u03c4\u03b1 \u03bc\u03b5 \u03bd\u03ad\u03b5\u03c2 \u03b5\u03c1\u03c9\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2; \u0394\u03b9\u03ac\u03bb\u03b5\u03be\u03b5 \u03ad\u03bd\u03b1 \u03b8\u03ad\u03bc\u03b1. \u0388\u03c7\u03b5\u03b9\u03c2 \u03b4\u03cd\u03bf \u03c0\u03c1\u03bf\u03c3\u03c0\u03ac\u03b8\u03b5\u03b9\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c3\u03b5 \u03ba\u03ac\u03b8\u03b5 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7. \u039c\u03b9\u03b1 \u03c3\u03c9\u03c3\u03c4\u03ae \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03c3\u03c4\u03b7\u03bd \u03c0\u03c1\u03ce\u03c4\u03b7 \u03c3\u03bf\u03c5 \u03c0\u03c1\u03bf\u03c3\u03c0\u03ac\u03b8\u03b5\u03b9\u03b1 \u03c3\u03bf\u03cd \u03b4\u03af\u03bd\u03b5\u03b9 \u03b4\u03cd\u03bf \u03b2\u03b1\u03b8\u03bc\u03bf\u03cd\u03c2 \u03ba\u03b1\u03b9 \u03c3\u03c4\u03b7 \u03b4\u03b5\u03cd\u03c4\u03b5\u03c1\u03b7 \u03ad\u03bd\u03b1\u03bd \u03b2\u03b1\u03b8\u03bc\u03cc.</p>\n<p>\u0398\u03ad\u03bb\u03b5\u03b9\u03c2 \u03bd\u03b1 <a href=\"https://europa.eu/european-union/about-eu_el\">\u03bc\u03ac\u03b8\u03b5\u03b9\u03c2 \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u0395\u0395;</a></p>",
            "button_answer": "\u0391\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7",
            "button_back_to_question": "\u03a0\u03af\u03c3\u03c9 \u03c3\u03c4\u03b7\u03bd \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7",
            "button_next_question": "\u0395\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7",
            "button_see_the_results": "\u0394\u03b5\u03af\u03c4\u03b5 \u03c4\u03b1 \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03b1",
            "button_start": "\u039e\u03b5\u03ba\u03af\u03bd\u03b1",
            "gold_body_feedback": "<p>\u039c\u03c0\u03c1\u03ac\u03b2\u03bf \u2014 \u03b5\u03af\u03c3\u03b1\u03b9 \u03c0\u03c1\u03b1\u03b3\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc\u03c2 \u03b3\u03bd\u03ce\u03c3\u03c4\u03b7\u03c2 \u03c4\u03c9\u03bd \u03b8\u03b5\u03bc\u03ac\u03c4\u03c9\u03bd \u03c4\u03b7\u03c2 \u0395\u0395!</p><p>\u0398\u03ad\u03bb\u03b5\u03b9\u03c2 \u03bd\u03b1 \u03b4\u03bf\u03ba\u03b9\u03bc\u03ac\u03c3\u03b5\u03b9\u03c2 \u03bc\u03b9\u03b1 \u03b1\u03ba\u03cc\u03bc\u03b7 \u03b5\u03bd\u03cc\u03c4\u03b7\u03c4\u03b1 \u03bc\u03b5 12 \u03bd\u03ad\u03b5\u03c2 \u03b5\u03c1\u03c9\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2; \u0394\u03b9\u03ac\u03bb\u03b5\u03be\u03b5 \u03ad\u03bd\u03b1 \u03bd\u03ad\u03bf \u03b8\u03ad\u03bc\u03b1.<br>\u0388\u03c7\u03b5\u03b9\u03c2 \u03b4\u03cd\u03bf \u03c0\u03c1\u03bf\u03c3\u03c0\u03ac\u03b8\u03b5\u03b9\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c3\u03b5 \u03ba\u03ac\u03b8\u03b5 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7. \u039c\u03b9\u03b1 \u03c3\u03c9\u03c3\u03c4\u03ae \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03c3\u03c4\u03b7\u03bd \u03c0\u03c1\u03ce\u03c4\u03b7 \u03c3\u03bf\u03c5 \u03c0\u03c1\u03bf\u03c3\u03c0\u03ac\u03b8\u03b5\u03b9\u03b1 \u03c3\u03bf\u03cd \u03b4\u03af\u03bd\u03b5\u03b9 \u03b4\u03cd\u03bf \u03b2\u03b1\u03b8\u03bc\u03bf\u03cd\u03c2 \u03ba\u03b1\u03b9 \u03c3\u03c4\u03b7 \u03b4\u03b5\u03cd\u03c4\u03b5\u03c1\u03b7 \u03ad\u03bd\u03b1\u03bd \u03b2\u03b1\u03b8\u03bc\u03cc.</p><p>\u0398\u03ad\u03bb\u03b5\u03b9\u03c2 \u03bd\u03b1 <a href=\"https://europa.eu/european-union/about-eu_el\">\u03b4\u03b9\u03b1\u03b2\u03ac\u03c3\u03b5\u03b9\u03c2 \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u0395\u0395;</a></p>",
            "heading_congratulations": "\u03a3\u03c5\u03b3\u03c7\u03b1\u03c1\u03b7\u03c4\u03ae\u03c1\u03b9\u03b1!",
            "label_question": "Question",
            "label_try_again": "\u039e\u03b1\u03bd\u03b1\u03c0\u03c1\u03bf\u03c3\u03c0\u03ac\u03b8\u03b7\u03c3\u03b5",
            "label_your_score": "\u0397 \u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b1 \u03c3\u03bf\u03c5",
            "link_privacy_statement": "\u0394\u03ae\u03bb\u03c9\u03c3\u03b7 \u03c0\u03b5\u03c1\u03af \u03c0\u03c1\u03bf\u03c3\u03c4\u03b1\u03c3\u03af\u03b1\u03c2 \u03c4\u03b7\u03c2 \u03b9\u03b4\u03b9\u03c9\u03c4\u03b9\u03ba\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2",
            "silver_body_feedback": "<p>\u03a4\u03b1 \u03c0\u03b1\u03c2 \u03c0\u03bf\u03bb\u03cd \u03ba\u03b1\u03bb\u03ac, \u03b1\u03bb\u03bb\u03ac \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd \u03b1\u03ba\u03cc\u03bc\u03b7 \u03c0\u03bf\u03bb\u03bb\u03ac \u03bd\u03b1 \u03bc\u03ac\u03b8\u03b5\u03b9\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u0395\u0395.</p>\n<p>\u0398\u03ad\u03bb\u03b5\u03b9\u03c2 \u03bd\u03b1 \u03b4\u03bf\u03ba\u03b9\u03bc\u03ac\u03c3\u03b5\u03b9\u03c2 \u03bc\u03b9\u03b1 \u03b1\u03ba\u03cc\u03bc\u03b7 \u03b5\u03bd\u03cc\u03c4\u03b7\u03c4\u03b1 \u03bc\u03b5 12 \u03bd\u03ad\u03b5\u03c2 \u03b5\u03c1\u03c9\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2; \u0394\u03b9\u03ac\u03bb\u03b5\u03be\u03b5 \u03ad\u03bd\u03b1 \u03bd\u03ad\u03bf \u03b8\u03ad\u03bc\u03b1. \u0388\u03c7\u03b5\u03b9\u03c2 \u03b4\u03cd\u03bf \u03c0\u03c1\u03bf\u03c3\u03c0\u03ac\u03b8\u03b5\u03b9\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c3\u03b5 \u03ba\u03ac\u03b8\u03b5 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7. \u039c\u03b9\u03b1 \u03c3\u03c9\u03c3\u03c4\u03ae \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03c3\u03c4\u03b7\u03bd \u03c0\u03c1\u03ce\u03c4\u03b7 \u03c3\u03bf\u03c5 \u03c0\u03c1\u03bf\u03c3\u03c0\u03ac\u03b8\u03b5\u03b9\u03b1 \u03c3\u03bf\u03cd \u03b4\u03af\u03bd\u03b5\u03b9 \u03b4\u03cd\u03bf \u03b2\u03b1\u03b8\u03bc\u03bf\u03cd\u03c2 \u03ba\u03b1\u03b9 \u03c3\u03c4\u03b7 \u03b4\u03b5\u03cd\u03c4\u03b5\u03c1\u03b7 \u03ad\u03bd\u03b1\u03bd \u03b2\u03b1\u03b8\u03bc\u03cc.</p>\n<p>\u0398\u03ad\u03bb\u03b5\u03b9\u03c2 \u03bd\u03b1 <a href=\"https://europa.eu/european-union/about-eu_el\">\u03bc\u03ac\u03b8\u03b5\u03b9\u03c2 \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u0395\u0395;</a></p>"
        }
    },
    "en": {
        "miscelaneous": {
            "body_congratulations_post": " section.",
            "body_congratulations_pre": "You've finished the ",
            "bronze_body_feedback": "<p>That's great! But there's still so much more to find out about the EU!</p>\n<p>Do you want to have another go or try another section with new questions? Choose a topic. You will have two attempts to answer each question. A correct answer on your first try scores you two points, and on your second go, one point.</p>\n<p>Do you want to <a href=\"http://europa.eu/about-eu/index_en.htm\">read more about the EU?</a></p>",
            "button_answer": "Answer",
            "button_back_to_question": "Back to the question",
            "button_next_question": "Next question",
            "button_see_the_results": "See the results",
            "button_start": "Start",
            "gold_body_feedback": "<p>Well done - you are truly an EU expert!</p>\n<p>Do you want to try another section with new questions? Choose a new topic.<br> You have two attempts to answer each question. A correct answer on your first try scores you two points, and on your second go, one point.</p>\n<p>Do you want to <a href=\"http://europa.eu/about-eu/index_en.htm\">read more about the EU?</a></p>",
            "heading_congratulations": "Congratulations!",
            "label_question": "Question",
            "label_try_again": "Try again",
            "label_your_score": "Your score",
            "link_privacy_statement": "",
            "silver_body_feedback": "<p>You're doing really well but there's still so much more to discover about the EU.</p>\n<p>Do you want to try another section with new questions? Choose a new topic. You will have two attempts to answer each question. A correct answer on your first try scores you two points, and on your second go, one point.</p>\n<p>Do you want to <a href=\"http://europa.eu/about-eu/index_en.htm\">read more about the EU?</a></p>"
        }
    },
    "es": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Has acabado la secci\u00f3n ",
            "bronze_body_feedback": "<p>\u00a1Estupendo! Pero te sigue quedando mucho por descubrir sobre la UE.</p><p>\u00bfQuieres volver a intentarlo o probar con las preguntas de otra secci\u00f3n? Elige un tema. Tienes dos oportunidades de responder a cada pregunta. Si das con la respuesta correcta en tu primer intento, te llevas dos puntos, y si aciertas en el segundo, un punto.</p><p>&nbsp;\u00bfQuieres <a href=\"https://europa.eu/european-union/about-eu_es\">leer m\u00e1s sobre la UE</a>?</p>",
            "button_answer": "Respuesta",
            "button_back_to_question": "Volver a la pregunta",
            "button_next_question": "Siguiente pregunta",
            "button_see_the_results": "Ver los resultados",
            "button_start": "Empezar",
            "gold_body_feedback": "<p>\u00a1Muy bien! \u00a1Est\u00e1 claro que dominas la UE!</p><p>\u00bfQuieres probar con las preguntas de otra secci\u00f3n? Elige un nuevo tema.<br>Tienes dos oportunidades de responder a cada pregunta. Si das con la respuesta correcta en tu primer intento, te llevas dos puntos, y si aciertas en el segundo, un punto.</p><p>\u00bfQuieres <a href=\"https://europa.eu/european-union/about-eu_es\">leer m\u00e1s sobre la UE</a>?</p>",
            "heading_congratulations": "\u00a1Enhorabuena!",
            "label_question": "Question",
            "label_try_again": "Intentarlo de nuevo",
            "label_your_score": "Tu puntuaci\u00f3n",
            "link_privacy_statement": "Declaraci\u00f3n de confidencialidad",
            "silver_body_feedback": "<p>Lo est\u00e1s haciendo realmente bien, pero a\u00fan te queda mucho por descubrir sobre la UE.</p><p>\u00bfQuieres probar con las preguntas de otra secci\u00f3n? Elige un nuevo tema. Tienes dos oportunidades de responder a cada pregunta. Si das con la respuesta correcta en tu primer intento, te llevas dos puntos, y si aciertas en el segundo, un punto.</p><p>\u00bfQuieres <a href=\"https://europa.eu/european-union/about-eu_es\">leer m\u00e1s sobre la UE</a>?</p>"
        }
    },
    "et": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Oled l\u00f5petanud osa ",
            "bronze_body_feedback": "<p>Kuid sul on ELi kohta siiski veel palju huvitavat \u00f5ppida.</p><p>Kas soovid uuesti proovida v\u00f5i vastata m\u00f5ne muu osa k\u00fcsimustele? Vali teema. Igale k\u00fcsimusele on v\u00f5imalik vastata kuni kaks korda. Esimese korraga valitud \u00f5ige vastus annab kaks punkti, teisel katsel valitud \u00f5ige vastus \u00fche punkti.</p><p>Kas soovid <a href=\"https://europa.eu/european-union/about-eu_et\">ELi kohta rohkem lugeda?</a></p>",
            "button_answer": "Vastus",
            "button_back_to_question": "Tagasi k\u00fcsimuse juurde",
            "button_next_question": "J\u00e4rgmine k\u00fcsimus",
            "button_see_the_results": "Vaata tulemusi",
            "button_start": "Alusta",
            "gold_body_feedback": "<p>V\u00e4ga tubli! Oled t\u00f5eline ELi ekspert!</p><p>Kas soovid vastata m\u00f5ne muu osa k\u00fcsimustele? Vali uus teema.<br>Igale k\u00fcsimusele on v\u00f5imalik vastata kuni kaks korda. Esimese korraga valitud \u00f5ige vastus annab kaks punkti, teisel katsel valitud \u00f5ige vastus \u00fche punkti.</p><p>Kas soovid <a href=\"https://europa.eu/european-union/about-eu_et\">ELi kohta rohkem lugeda?</a></p>",
            "heading_congratulations": "\u00d5nnitleme!",
            "label_question": "Question",
            "label_try_again": "Proovi uuesti",
            "label_your_score": "Sinu tulemus",
            "link_privacy_statement": "Isikuandmete kaitse p\u00f5him\u00f5tted",
            "silver_body_feedback": "<p>Olid tubli, aga on veel palju huvitavat, mida sa ELi kohta ei tea.</p><p>Kas soovid vastata m\u00f5ne muu osa k\u00fcsimustele? Vali uus teema. Igale k\u00fcsimusele on v\u00f5imalik vastata kuni kaks korda. Esimese korraga valitud \u00f5ige vastus annab kaks punkti, teisel katsel valitud \u00f5ige vastus \u00fche punkti.</p><p>Kas soovid <a href=\"https://europa.eu/european-union/about-eu_et\">ELi kohta rohkem lugeda?</a></p>"
        }
    },
    "fi": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Olet selvitt\u00e4nyt osion ",
            "bronze_body_feedback": "<p>Hienoa! Voit kuitenkin oppia viel\u00e4 paljon lis\u00e4\u00e4 EU:sta!</p>\n<p>Haluatko yritt\u00e4\u00e4 uudelleen tai kokeilla jonkin toisen osion kysymyksi\u00e4? Valitse aihe. Voit yritt\u00e4\u00e4 vastata jokaiseen kysymykseen kaksi kertaa. Jos vastaat oikein ensimm\u00e4isell\u00e4 yrityksell\u00e4, saat kaksi pistett\u00e4, jos toisella, saat yhden pisteen.</p>\n<p>Haluatko <a href=\"https://europa.eu/european-union/about-eu_fi\">lukea lis\u00e4\u00e4 EU:sta?</a></p>",
            "button_answer": "Vastaus",
            "button_back_to_question": "Palaa kysymykseen",
            "button_next_question": "Seuraava kysymys",
            "button_see_the_results": "N\u00e4yt\u00e4 tulokset",
            "button_start": "Aloita",
            "gold_body_feedback": "<p>Hienoa \u2013 olet todellinen EU-asiantuntija!</p>\n<p>Haluatko kokeilla jonkin toisen osion kysymyksi\u00e4? Valitse uusi aihe.<br> Voit yritt\u00e4\u00e4 vastata jokaiseen kysymykseen kaksi kertaa. Jos vastaat oikein ensimm\u00e4isell\u00e4 yrityksell\u00e4, saat kaksi pistett\u00e4, jos toisella, saat yhden pisteen.</p>\n<p>Haluatko <a href=\"https://europa.eu/european-union/about-eu_fi\">lukea lis\u00e4\u00e4 EU:sta?</a></p>",
            "heading_congratulations": "Onnittelut!",
            "label_question": "Question",
            "label_try_again": "Yrit\u00e4 uudestaan",
            "label_your_score": "Pisteesi",
            "link_privacy_statement": "Tietosuojaseloste",
            "silver_body_feedback": "<p>Tulos on eritt\u00e4in hyv\u00e4, mutta voit oppia viel\u00e4 paljon lis\u00e4\u00e4 EU:sta.</p>\n<p>Haluatko kokeilla jonkin toisen osion kysymyksi\u00e4? Valitse uusi aihe. Voit yritt\u00e4\u00e4 vastata jokaiseen kysymykseen kaksi kertaa. Jos vastaat oikein ensimm\u00e4isell\u00e4 yrityksell\u00e4, saat kaksi pistett\u00e4, jos toisella, saat yhden pisteen.</p>\n<p>Haluatko <a href=\"https://europa.eu/european-union/about-eu_fi\">lukea lis\u00e4\u00e4 EU:sta?</a></p>"
        }
    },
    "fr": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Vous avez termin\u00e9 la section ",
            "bronze_body_feedback": "<p>C\u2019est super, mais il reste encore beaucoup de choses \u00e0 d\u00e9couvrir sur l'UE!</p><p>Voulez-vous passer \u00e0 une autre section et r\u00e9pondre \u00e0 de nouvelles questions? Choisissez un th\u00e8me. Vous avez droit \u00e0 deux essais pour chaque question. Une r\u00e9ponse correcte lors du premier essai vaut deux points et lors du second essai, un point.</p><p>Voulez-vous <a href=\"https://europa.eu/european-union/about-eu_fr\">en savoir plus sur l\u2019UE?</a></p>",
            "button_answer": "R\u00e9ponse",
            "button_back_to_question": "Retour \u00e0 la question",
            "button_next_question": "Question suivante",
            "button_see_the_results": "Voir les r\u00e9sultats",
            "button_start": "Commencer",
            "gold_body_feedback": "<p>Bravo! Vous \u00eates un v\u00e9ritable sp\u00e9cialiste de l\u2019UE!</p><p>Voulez-vous passer \u00e0 une autre section et r\u00e9pondre \u00e0 de nouvelles questions? Choisissez un nouveau th\u00e8me.<br>Vous avez droit \u00e0 deux essais pour r\u00e9pondre \u00e0 chaque question. Une r\u00e9ponse correcte lors du premier essai vaut deux points et lors du second essai, un point.</p><p>Voulez-vous <a href=\"https://europa.eu/european-union/about-eu_fr\">en savoir plus sur l\u2019UE?</a></p>",
            "heading_congratulations": "F\u00e9licitations!",
            "label_question": "Question",
            "label_try_again": "R\u00e9essayer",
            "label_your_score": "Votre score",
            "link_privacy_statement": "D\u00e9claration relative \u00e0 la protection de la vie priv\u00e9e",
            "silver_body_feedback": "<p>Vous vous en sortez tr\u00e8s bien, mais il reste encore beaucoup de choses \u00e0 d\u00e9couvrir sur l'UE.</p><p>Voulez-vous passer \u00e0 une autre section et r\u00e9pondre \u00e0 de nouvelles questions? Choisissez un nouveau th\u00e8me. Vous avez droit \u00e0 deux essais pour chaque question. Une r\u00e9ponse correcte lors du premier essai vaut deux points et lors du second essai, un point.</p><p>Voulez-vous <a href=\"https://europa.eu/european-union/about-eu_fr\">en savoir plus sur l\u2019UE?</a></p>"
        }
    },
    "ga": {
        "miscelaneous": {
            "body_congratulations_post": " cr\u00edochnaithe agat.",
            "body_congratulations_pre": "T\u00e1 an t-\u00e1bhar ",
            "bronze_body_feedback": "<p>Maith th\u00fa! Ach t\u00e1 a l\u00e1n le foghlaim agat faoin Aontas Eorpach go f\u00f3ill.</p>\n<p>An dteasta\u00edonn uait tabhairt faoi ar\u00eds n\u00f3 triail a bhaint as \u00e1bhar eile le ceisteanna nua? Roghnaigh topaic. Beidh dh\u00e1 iarraidh agat chun gach ceist a fhreagairt. M\u00e1 fhaigheann t\u00fa an freagra ceart ar an gc\u00e9ad iarraidh, gheobhaidh t\u00fa dh\u00e1 phointe, ach pointe amh\u00e1in a gheobhaidh t\u00fa m\u00e1s ar an dara hiarraidh a fhaigheann t\u00fa an freagra ceart.&nbsp;</p>\n<p>Ar mhaith leat <a href=\"https://europa.eu/european-union/about-eu_ga\">tuilleadh a l\u00e9amh faoin Aontas Eorpach?</a></p>",
            "button_answer": "Freagra",
            "button_back_to_question": "Ar ais chuig an gceist",
            "button_next_question": "An ch\u00e9ad cheist eile",
            "button_see_the_results": "Tortha\u00ed anseo",
            "button_start": "T\u00fas",
            "gold_body_feedback": "<p>S\u00e1r-obair \u2013 t\u00e1 t\u00fa i do shaineola\u00ed ar ch\u00farsa\u00ed na hEorpa!</p><p>Ar mhaith leat tabhairt faoi \u00e1bhar eile le ceisteanna nua? Roghnaigh topaic nua.<br>T\u00e1 dh\u00e1 iarraidh agat chun gach ceist a fhreagairt. M\u00e1 fhaigheann t\u00fa an freagra ceart ar an gc\u00e9ad iarraidh, gheobhaidh t\u00fa dh\u00e1 phointe, ach pointe amh\u00e1in a gheobhaidh t\u00fa m\u00e1s ar an dara hiarraidh a fhaigheann t\u00fa an freagra ceart.</p><p>Ar mhaith leat <a href=\"https://europa.eu/european-union/about-eu_ga\">tuilleadh a l\u00e9amh faoin Aontas Eorpach?</a></p>",
            "heading_congratulations": "Comhghairdeas!",
            "label_question": "Question",
            "label_try_again": "Triail ar\u00eds \u00e9",
            "label_your_score": "Do sc\u00f3r",
            "link_privacy_statement": "R\u00e1iteas pr\u00edobh\u00e1ideachais",
            "silver_body_feedback": "<p>T\u00e1 ag \u00e9ir\u00ed go maith leat ach t\u00e1 a l\u00e1n le foghlaim agat faoin Aontas Eorpach go f\u00f3ill.</p>\n<p>Ar mhaith leat tabhairt faoi \u00e1bhar eile le ceisteanna nua? Roghnaigh topaic nua. Beidh dh\u00e1 iarraidh agat chun gach ceist a fhreagairt. M\u00e1 fhaigheann t\u00fa an freagra ceart ar an gc\u00e9ad iarraidh, gheobhaidh t\u00fa dh\u00e1 phointe, ach pointe amh\u00e1in a gheobhaidh t\u00fa m\u00e1s ar an dara hiarraidh a fhaigheann t\u00fa an freagra ceart.</p>\n<p>Ar mhaith leat <a href=\"https://europa.eu/european-union/about-eu_ga\">tuilleadh a l\u00e9amh faoin Aontas Eorpach?</a></p>"
        }
    },
    "hr": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "dovr\u0161ili ste dio ",
            "bronze_body_feedback": "<p>Odli\u010dno! No ima jo\u0161 mnogo toga \u0161to morate nau\u010diti o EU-u.</p>\n<p>\u017delite li jo\u0161 jednom poku\u0161ati ili rije\u0161iti jo\u0161 jedan dio s novim pitanjima? Odaberite temu. Imate dvije prilike za odgovor na svako pitanje. To\u010dnim odgovorom pri prvom poku\u0161aju dobivate dva boda, a pri drugom poku\u0161aju dobivate jedan bod.</p>\n<p>\u017delite li <a href=\"https://europa.eu/european-union/about-eu_hr\">pro\u010ditati vi\u0161e o EU-u?</a></p>",
            "button_answer": "Odgovor",
            "button_back_to_question": "Povratak na pitanje",
            "button_next_question": "Sljede\u0107e pitanje",
            "button_see_the_results": "Pogledaj rezultate!",
            "button_start": "Po\u010detak",
            "gold_body_feedback": "<p>Bravo \u2013 vrsni ste poznavatelji EU-a!</p>\n<p>\u017delite li rije\u0161iti jo\u0161 jedan dio s novim pitanjima? Odaberite novu temu.<br> Imate dvije prilike za odgovor na svako pitanje. To\u010dnim odgovorom pri prvom poku\u0161aju dobivate dva boda, a pri drugom poku\u0161aju dobivate jedan bod.</p>\n<p>\u017delite li <a href=\"https://europa.eu/european-union/about-eu_hr\">pro\u010ditati vi\u0161e o EU-u?</a></p>",
            "heading_congratulations": "\u010cestitke,",
            "label_question": "Question",
            "label_try_again": "Poku\u0161ajte ponovno!",
            "label_your_score": "Va\u0161 rezultat",
            "link_privacy_statement": "Izjava o za\u0161titi podataka",
            "silver_body_feedback": "<p>Stvarno vam dobro ide, ali ima jo\u0161 mnogo toga \u0161to morate nau\u010diti o EU-u. \u017delite li rije\u0161iti jo\u0161 jedan dio s novim pitanjima? Odaberite novu temu. Imate dvije prilike za odgovor na svako pitanje. To\u010dnim odgovorom pri prvom poku\u0161aju dobivate dva boda, a pri drugom poku\u0161aju dobivate jedan bod.</p>\n<p>\u017delite li <a href=\"https://europa.eu/european-union/about-eu_hr\">pro\u010ditati vi\u0161e o EU-u?</a></p>"
        }
    },
    "hu": {
        "miscelaneous": {
            "body_congratulations_post": " r\u00e9szben.",
            "body_congratulations_pre": "Az \u00f6sszes k\u00e9rd\u00e9st megv\u00e1laszoltad a(z) ",
            "bronze_body_feedback": "<p>Nagyon j\u00f3 eredm\u00e9ny, de m\u00e9g t\u00f6bb pontot is el\u00e9rhetsz, ha tov\u00e1bb b\u0151v\u00edted az Eur\u00f3pai Uni\u00f3val kapcsolatos ismereteidet.</p><p>Szeretn\u00e9l m\u00e9g egyszer nekifutni a most megv\u00e1laszolt k\u00e9rd\u00e9seknek, vagy megpr\u00f3b\u00e1lkozol esetleg egy m\u00e1sik k\u00e9rd\u00e9ssorral? V\u00e1lassz t\u00e9m\u00e1t. Mindegyik k\u00e9rd\u00e9s eset\u00e9ben k\u00e9tszer pr\u00f3b\u00e1lkozhatsz: ha els\u0151re eltal\u00e1lod a helyes v\u00e1laszt, k\u00e9t pontot kapsz, ha m\u00e1sodikra, akkor egyet.</p><p>Szeretn\u00e9l <a href=\"https://europa.eu/european-union/about-eu_hu\">r\u00e9szletesebben t\u00e1j\u00e9koz\u00f3dni az Eur\u00f3pai Uni\u00f3r\u00f3l?</a></p>",
            "button_answer": "V\u00e1lasz",
            "button_back_to_question": "Vissza a k\u00e9rd\u00e9shez",
            "button_next_question": "K\u00f6vetkez\u0151 k\u00e9rd\u00e9s",
            "button_see_the_results": "Az eredm\u00e9ny megtekint\u00e9se",
            "button_start": "Ind\u00edt\u00e1s",
            "gold_body_feedback": "<p>Fantasztikus vagy, val\u00f3di EU-szak\u00e9rt\u0151!</p><p>Szeretn\u00e9l egy m\u00e1sik k\u00e9rd\u00e9ssorral is megpr\u00f3b\u00e1lkozni? V\u00e1lassz \u00faj t\u00e9m\u00e1t!<br>Mindegyik k\u00e9rd\u00e9s eset\u00e9ben k\u00e9tszer pr\u00f3b\u00e1lkozhatsz: ha els\u0151re eltal\u00e1lod a helyes v\u00e1laszt, k\u00e9t pontot kapsz, ha m\u00e1sodikra, akkor egyet.</p><p>Szeretn\u00e9l <a href=\"https://europa.eu/european-union/about-eu_hu\">r\u00e9szletesebben t\u00e1j\u00e9koz\u00f3dni az Eur\u00f3pai Uni\u00f3r\u00f3l?</a></p>",
            "heading_congratulations": "Gratul\u00e1lunk!",
            "label_question": "Question",
            "label_try_again": "M\u0113\u0123in\u0101t v\u0113lreiz",
            "label_your_score": "Pontsz\u00e1mod",
            "link_privacy_statement": "Adatv\u00e9delmi nyilatkozat",
            "silver_body_feedback": "<p>\u00dcgyes vagy, de m\u00e9g b\u0151ven van mit megtudnod az EU-r\u00f3l.</p><p>Szeretn\u00e9l egy m\u00e1sik k\u00e9rd\u00e9ssorral is megpr\u00f3b\u00e1lkozni? V\u00e1lassz \u00faj t\u00e9m\u00e1t! Mindegyik k\u00e9rd\u00e9s eset\u00e9ben k\u00e9tszer pr\u00f3b\u00e1lkozhatsz: ha els\u0151re eltal\u00e1lod a helyes v\u00e1laszt, k\u00e9t pontot kapsz, ha m\u00e1sodikra, akkor egyet.</p><p>Szeretn\u00e9l <a href=\"https://europa.eu/european-union/about-eu_hu\">r\u00e9szletesebben t\u00e1j\u00e9koz\u00f3dni az Eur\u00f3pai Uni\u00f3r\u00f3l?</a></p>"
        }
    },
    "it": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Hai completato la sezione ",
            "bronze_body_feedback": "<p>Fantastico! Ma c'\u00e8 ancora molto da scoprire sull'UE!</p><p>Vuoi fare un altro tentativo oppure provare un'altra sezione con nuove domande? Scegli un argomento. Sono concessi due tentativi di risposta per ogni domanda. Ottieni due punti se rispondi correttamente a una domanda al primo tentativo e un punto se rispondi correttamente al secondo tentativo.</p><p>Vuoi <a href=\"https://europa.eu/european-union/about-eu_it\">saperne di pi\u00f9 sull'UE?</a></p>",
            "button_answer": "Risposta",
            "button_back_to_question": "Torna alla domanda",
            "button_next_question": "Domanda successiva",
            "button_see_the_results": "Vedi i risultati",
            "button_start": "Inizia",
            "gold_body_feedback": "<p>Complimenti! Sei davvero un esperto dell'UE!</p><p>Vuoi provare un'altra sezione con nuove domande? Scegli un nuovo argomento.<br>Sono concessi due tentativi di risposta per ogni domanda. Ottieni due punti se rispondi correttamente a una domanda al primo tentativo e un punto se rispondi correttamente al secondo tentativo.</p><p>Vuoi <a href=\"https://europa.eu/european-union/about-eu_it\">saperne di pi\u00f9 sull'UE?</a></p>",
            "heading_congratulations": "Complimenti!",
            "label_question": "Question",
            "label_try_again": "Riprova",
            "label_your_score": "Il tuo punteggio",
            "link_privacy_statement": "Informativa sulla privacy",
            "silver_body_feedback": "<p>Te la stai cavando bene, ma c'\u00e8 ancora molto da scoprire sull'UE.</p><p>Vuoi provare un'altra sezione con nuove domande? Scegli un nuovo argomento. Sono concessi due tentativi di risposta per ogni domanda. Ottieni due punti se rispondi correttamente a una domanda al primo tentativo e un punto se rispondi correttamente al secondo tentativo.</p><p>Vuoi <a href=\"https://europa.eu/european-union/about-eu_it\">saperne di pi\u00f9 sull'UE?</a></p>"
        }
    },
    "lt": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Baigei dal\u012f ",
            "bronze_body_feedback": "<p>Puiku! Ta\u010diau apie ES dar galima su\u017einoti gerokai daugiau.</p>\n<p>Ar nori pabandyti dar kart\u0105 arba kit\u0105 dal\u012f ir naujus klausimus? Pasirink tem\u0105. \u012e kiekvien\u0105 klausim\u0105 galima bandyti atsakyti du kartus. \u012e klausim\u0105 atsakius teisingai i\u0161 pirmo karto skiriami du ta\u0161kai, i\u0161 antro karto \u2013 vienas.</p>\n<p>Nori <a href=\"https://europa.eu/european-union/about-eu_lt\">apie ES su\u017einoti daugiau?</a></p>",
            "button_answer": "Atsakymas",
            "button_back_to_question": "Gr\u012f\u017eti \u012f klausim\u0105",
            "button_next_question": "Kitas klausimas",
            "button_see_the_results": "Rodyti rezultatus",
            "button_start": "Prad\u0117ti",
            "gold_body_feedback": "<p>\u0160aunu! Esi tikras ES \u017einovas!</p>\n<p>Ar nori i\u0161bandyti kit\u0105 dal\u012f ir naujus klausimus? Pasirink nauj\u0105 tem\u0105.<br> \u012e kiekvien\u0105 klausim\u0105 galima bandyti atsakyti du kartus. \u012e klausim\u0105 atsakius teisingai i\u0161 pirmo karto skiriami du ta\u0161kai, i\u0161 antro karto \u2013 vienas.</p>\n<p>Nori <a href=\"https://europa.eu/european-union/about-eu_lt\">apie ES su\u017einoti daugiau?</a></p>",
            "heading_congratulations": "Sveikiname!",
            "label_question": "Question",
            "label_try_again": "Bandyk dar kart\u0105",
            "label_your_score": "Tavo rezultatas",
            "link_privacy_statement": "Parei\u0161kimas apie privatumo apsaug\u0105",
            "silver_body_feedback": "<p>Tau pavyko tikrai gerai, ta\u010diau apie ES dar galima su\u017einoti gerokai daugiau.</p>\n<p>Ar nori i\u0161bandyti kit\u0105 dal\u012f ir naujus klausimus? Pasirink nauj\u0105 tem\u0105. \u012e kiekvien\u0105 klausim\u0105 galima bandyti atsakyti du kartus. \u012e klausim\u0105 atsakius teisingai i\u0161 pirmo karto skiriami du ta\u0161kai, i\u0161 antro karto \u2013 vienas.</p>\n<p>Nori <a href=\"https://europa.eu/european-union/about-eu_lt\">apie ES su\u017einoti daugiau?</a></p>"
        }
    },
    "lv": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Tu esi pabeidzis da\u013cu ",
            "bronze_body_feedback": "<p>Lielisks rezult\u0101ts! Ta\u010du par ES vari uzzin\u0101t v\u0113l daudz ko.</p>\n<p>Vai v\u0113lies atk\u0101rtot sp\u0113li vai izm\u0113\u0123in\u0101t v\u0113l vienu da\u013cu ar jauniem jaut\u0101jumiem? Izv\u0113lies tematu. Uz katru jaut\u0101jumu vari atbild\u0113t divas reizes. Ja izdodas pareizi atbild\u0113t uzreiz, tu sa\u0146em divus punktus, bet tad, ja pareizo atbildi izv\u0113lies otraj\u0101 pieg\u0101jien\u0101, sa\u0146em vienu punktu.</p>\n<p>Vai gribi<a href=\"https://europa.eu/european-union/about-eu_lv\"> par ES palas\u012bt v\u0113l ko?</a></p>",
            "button_answer": "Atbilde",
            "button_back_to_question": "Atpaka\u013c pie jaut\u0101juma",
            "button_next_question": "N\u0101kamais jaut\u0101jums",
            "button_see_the_results": "Skat\u012bt rezult\u0101tus",
            "button_start": "S\u0101kt",
            "gold_body_feedback": "<p>Izcili, tu tie\u0161\u0101m esi eksperts ES liet\u0101s!</p>\n<p>Vai v\u0113lies izm\u0113\u0123in\u0101t v\u0113l vienu da\u013cu ar jauniem jaut\u0101jumiem? Izv\u0113lies jaunu tematu.<br> Uz katru jaut\u0101jumu vari m\u0113\u0123in\u0101t atbild\u0113t divreiz. Ja izdodas pareizi atbild\u0113t uzreiz, tu sa\u0146em divus punktus, bet tad, ja pareizo atbildi izv\u0113lies otraj\u0101 pieg\u0101jien\u0101, sa\u0146em vienu punktu.</p>\n<p>Vai gribi<a href=\"https://europa.eu/european-union/about-eu_lv\"> par ES palas\u012bt v\u0113l ko?</a></p>",
            "heading_congratulations": "Apsveicam!",
            "label_question": "Question",
            "label_try_again": "M\u0113\u0123in\u0101t v\u0113lreiz",
            "label_your_score": "Tavs punktu skaits",
            "link_privacy_statement": "Pazi\u0146ojums par priv\u0101tumu",
            "silver_body_feedback": "<p>Tev veicies itin labi, ta\u010du par ES tu var\u0113tu uzzin\u0101t v\u0113l daudz ko.</p>\n<p>Vai v\u0113lies izm\u0113\u0123in\u0101t v\u0113l vienu da\u013cu ar jauniem jaut\u0101jumiem? Izv\u0113lies jaunu tematu. Uz katru jaut\u0101jumu vari atbild\u0113t divas reizes. Ja izdodas pareizi atbild\u0113t uzreiz, tu sa\u0146em divus punktus, bet tad, ja pareizo atbildi izv\u0113lies otraj\u0101 pieg\u0101jien\u0101, sa\u0146em vienu punktu.</p>\n<p>Vai gribi<a href=\"https://europa.eu/european-union/about-eu_lv\"> par ES palas\u012bt v\u0113l ko?</a></p>"
        }
    },
    "mt": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Spi\u010b\u010bajt it-taqsima ",
            "bronze_body_feedback": "<p>Tajjeb \u0127afna! I\u017cda g\u0127ad hemm \u0127afna x\u2019issir taf dwar l-UE!</p>\n<p>Tixtieq ter\u0121a\u2019 tipprova jew tmur f\u2019taqsima o\u0127ra b\u2019mistoqsijiet \u0121odda? Ag\u0127\u017cel su\u0121\u0121ett: G\u0127andek \u017cew\u0121 tentattivi biex twie\u0121eb kull mistoqsija. Twe\u0121iba korretta mal-ewwel darba tag\u0127tik \u017cew\u0121 punti u mat-tieni darba, punt wie\u0127ed.</p>\n<p>Tixtieq <a href=\"https://europa.eu/european-union/about-eu_mt\">taqra aktar dwar l-UE?</a></p>",
            "button_answer": "Twe\u0121iba",
            "button_back_to_question": "Lura g\u0127all-mistoqsija",
            "button_next_question": "Il-mistoqsija li jmiss",
            "button_see_the_results": "Ara r-ri\u017cultati",
            "button_start": "Ibda",
            "gold_body_feedback": "<p>Prosit - int verament espert tal-UE!</p>\n<p>Tixtieq tipprova taqsima o\u0127ra b\u2019mistoqsijiet \u0121odda? Ag\u0127\u017cel su\u0121\u0121ett \u0121did.<br> G\u0127andek \u017cew\u0121 tentattivi biex twie\u0121eb kull mistoqsija. Twe\u0121iba korretta mal-ewwel darba tag\u0127tik \u017cew\u0121 punti u mat-tieni darba, punt wie\u0127ed.</p>\n<p>Tixtieq <a href=\"https://europa.eu/european-union/about-eu_mt\">taqra aktar dwar l-UE?</a></p>",
            "heading_congratulations": "Prosit!",
            "label_question": "Question",
            "label_try_again": "Er\u0121a\u2019 pprova",
            "label_your_score": "L-g\u0127add ta' punti tieg\u0127ek",
            "link_privacy_statement": "Stqarrija ta\u2019 privatezza",
            "silver_body_feedback": "<p>Sejjer tajjeb i\u017cda g\u0127ad hemm \u0127afna aktar x\u2019tiskopri dwar l-UE.</p>\n<p>Tixtieq tipprova taqsima o\u0127ra b\u2019mistoqsijiet \u0121odda? Ag\u0127\u017cel su\u0121\u0121ett \u0121did. G\u0127andek \u017cew\u0121 tentattivi biex twie\u0121eb kull mistoqsija. Twe\u0121iba korretta mal-ewwel darba tag\u0127tik \u017cew\u0121 punti u mat-tieni darba, punt wie\u0127ed.</p>\n<p>Tixtieq <a href=\"https://europa.eu/european-union/about-eu_mt\">taqra aktar dwar l-UE?</a></p>"
        }
    },
    "nl": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Je bent klaar met de vragenreeks over ",
            "bronze_body_feedback": "<p>Niet slecht! Maar er valt nog veel meer te ontdekken over de EU!</p>\n<p>Heb je zin om nog een andere reeks vragen beantwoorden? Kies een onderwerp. Je krijgt steeds twee kansen om het goede antwoord te geven. Heb je het antwoord meteen goed dan krijg je twee punten. Bij je tweede poging krijg je maar \u00e9\u00e9n punt.&nbsp;</p>\n<p>Wil je <a href=\"https://europa.eu/european-union/about-eu_nl\">meer lezen over de EU</a>?</p>",
            "button_answer": "Antwoord",
            "button_back_to_question": "Terug naar de vraag",
            "button_next_question": "Volgende vraag",
            "button_see_the_results": "Resultaten",
            "button_start": "Beginnen",
            "gold_body_feedback": "<p>Uitstekend \u2014 je bent een echte EU-expert!</p>\n<p>Heb je zin om nog een andere reeks vragen beantwoorden? Kies een nieuw onderwerp.<br> Je krijgt steeds twee kansen om het goede antwoord te geven. Heb je het antwoord meteen goed dan krijg je twee punten. Bij je tweede poging krijg je maar \u00e9\u00e9n punt.</p>\n<p>Wil je <a href=\"https://europa.eu/european-union/about-eu_nl\">meer lezen over de EU</a>?</p>",
            "heading_congratulations": "Goed zo!",
            "label_question": "Question",
            "label_try_again": "Probeer het nog eens",
            "label_your_score": "Jouw score",
            "link_privacy_statement": "Privacyverklaring",
            "silver_body_feedback": "<p>Je doet het fantastisch, maar er valt nog veel meer te ontdekken over de EU.</p>\n<p>Heb je zin om nog een andere reeks vragen beantwoorden? Kies een nieuw onderwerp. Je krijgt steeds twee kansen om het goede antwoord te geven. Heb je het antwoord meteen goed dan krijg je twee punten. Bij je tweede poging krijg je maar \u00e9\u00e9n punt.</p>\n<p>Wil je <a href=\"https://europa.eu/european-union/about-eu_nl\">meer lezen over de EU</a>?</p>"
        }
    },
    "pl": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Odpowiedzia\u0142e\u015b(-a\u015b) na wszystkie pytania z cz\u0119\u015bci tematycznej ",
            "bronze_body_feedback": "<p>To ca\u0142kiem nie\u017ale, ale mo\u017cesz jeszcze znacznie pog\u0142\u0119bi\u0107 swoj\u0105 wiedz\u0119 na temat UE.</p>\n<p>Chcesz spr\u00f3bowa\u0107 jeszcze raz? Czy wolisz przej\u015b\u0107 teraz do pyta\u0144 z&nbsp;innej cz\u0119\u015bci? Wybierz temat. Na ka\u017cde pytanie mo\u017cesz spr\u00f3bowa\u0107 udzieli\u0107 odpowiedzi dwa razy. Je\u015bli odpowiesz poprawnie przy pierwszym podej\u015bciu, otrzymasz dwa punkty, je\u015bli przy drugim \u2013 jeden punkt.</p>\n<p>Chcesz <a href=\"https://europa.eu/european-union/about-eu_pl\">dowiedzie\u0107 si\u0119 wi\u0119cej na temat UE?</a></p>",
            "button_answer": "Odpowied\u017a",
            "button_back_to_question": "Wr\u00f3\u0107 do pytania",
            "button_next_question": "Nast\u0119pne pytanie",
            "button_see_the_results": "Poka\u017c wyniki",
            "button_start": "Start",
            "gold_body_feedback": "<p>Brawo! Jeste\u015b ekspertem w&nbsp;sprawach unijnych!</p>\n<p>Chcesz teraz spr\u00f3bowa\u0107 odpowiedzie\u0107 na pytania z&nbsp;innej cz\u0119\u015bci? Wybierz nowy temat.<br> Na ka\u017cde pytanie mo\u017cesz spr\u00f3bowa\u0107 udzieli\u0107 odpowiedzi dwa razy. Je\u015bli odpowiesz poprawnie przy pierwszym podej\u015bciu, otrzymasz dwa punkty, je\u015bli przy drugim \u2013 jeden punkt.</p>\n<p>Chcesz <a href=\"https://europa.eu/european-union/about-eu_pl\">dowiedzie\u0107 si\u0119 wi\u0119cej na temat UE?</a></p>",
            "heading_congratulations": "Gratulujemy!",
            "label_question": "Question",
            "label_try_again": "Spr\u00f3buj ponownie",
            "label_your_score": "Tw\u00f3j wynik",
            "link_privacy_statement": "O\u015bwiadczenie o ochronie prywatno\u015bci",
            "silver_body_feedback": "<p>To naprawd\u0119 dobry wynik \u2013 jednak mo\u017cesz jeszcze dowiedzie\u0107 si\u0119 wielu innych ciekawych rzeczy o UE.</p>\n<p>Chcesz teraz spr\u00f3bowa\u0107 odpowiedzie\u0107 na pytania z&nbsp;innej cz\u0119\u015bci? Wybierz nowy temat. Na ka\u017cde pytanie mo\u017cesz spr\u00f3bowa\u0107 udzieli\u0107 odpowiedzi dwa razy. Je\u015bli odpowiesz poprawnie przy pierwszym podej\u015bciu, otrzymasz dwa punkty, je\u015bli przy drugim \u2013 jeden punkt.</p>\n<p>Chcesz <a href=\"https://europa.eu/european-union/about-eu_pl\">dowiedzie\u0107 si\u0119 wi\u0119cej na temat UE?</a></p>"
        }
    },
    "pt": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Acabaste a sec\u00e7\u00e3o ",
            "bronze_body_feedback": "<p>N\u00e3o estiveste mal... Mas ainda tens muito mais para descobrir sobre a UE!</p>\n<p>Queres tentar mais uma vez ou tentar outra sec\u00e7\u00e3o com novas perguntas? Escolhe um tema. Tens duas tentativas para responder a cada pergunta. Uma resposta correta \u00e0 primeira tentativa vale dois pontos e, \u00e0 segunda, um ponto.</p>\n<p>Queres <a href=\"https://europa.eu/european-union/about-eu_pt\">ler mais sobre a UE?</a></p>",
            "button_answer": "Resposta",
            "button_back_to_question": "Voltar \u00e0 pergunta",
            "button_next_question": "Pr\u00f3xima pergunta",
            "button_see_the_results": "Ver pontua\u00e7\u00e3o",
            "button_start": "In\u00edcio",
            "gold_body_feedback": "<p>Bravo! \u00c9s um verdadeiro especialista na UE!</p>\n<p>Queres tentar outra sec\u00e7\u00e3o com novas perguntas? Escolhe um novo tema.<br> Tens duas tentativas para responder a cada pergunta. Uma resposta correta \u00e0 primeira tentativa vale dois pontos e, \u00e0 segunda, um ponto.</p>\n<p>Queres <a href=\"https://europa.eu/european-union/about-eu_pt\">ler mais sobre a UE?</a></p>",
            "heading_congratulations": "Parab\u00e9ns!",
            "label_question": "Question",
            "label_try_again": "Volta a tentar",
            "label_your_score": "A tua pontua\u00e7\u00e3o",
            "link_privacy_statement": "Declara\u00e7\u00e3o de confidencialidade",
            "silver_body_feedback": "<p>Estiveste muito bem, mas ainda tens muito mais para descobrir sobre a UE.</p>\n<p>Queres tentar outra sec\u00e7\u00e3o com novas perguntas? Escolhe um novo tema. Tens duas tentativas para responder a cada pergunta. Uma resposta correta \u00e0 primeira tentativa vale dois pontos e, \u00e0 segunda, um ponto.</p>\n<p>Queres <a href=\"https://europa.eu/european-union/about-eu_pt\">ler mais sobre a UE?</a></p>"
        }
    },
    "ro": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Ai terminat sec\u021biunea ",
            "bronze_body_feedback": "<p>Bine! Dar mai sunt \u00eenc\u0103 multe lucruri de aflat despre UE!</p>\n<p>Vrei s\u0103 o iei de la \u00eenceput sau s\u0103 treci la alt\u0103 sec\u021biune, cu noi \u00eentreb\u0103ri? Alege o tem\u0103. Ai dreptul la dou\u0103 \u00eencerc\u0103ri pentru fiecare \u00eentrebare. Un r\u0103spuns corect la prima \u00eencercare valoreaz\u0103 dou\u0103 puncte, iar la a doua, un punct.</p>\n<p>Vrei <a href=\"https://europa.eu/european-union/about-eu_ro\">s\u0103 afli mai multe despre UE</a>?</p>",
            "button_answer": "R\u0103spuns",
            "button_back_to_question": "\u00cenapoi la \u00eentrebare",
            "button_next_question": "\u00centrebarea urm\u0103toare",
            "button_see_the_results": "Afi\u0219eaz\u0103 rezultatele",
            "button_start": "Start",
            "gold_body_feedback": "<p>Bravo, e\u0219ti as \u00een UE!</p>\n<p>Vrei s\u0103 treci la alt\u0103 sec\u021biune, cu noi \u00eentreb\u0103ri? Alege o nou\u0103 tem\u0103.<br> Ai dreptul la dou\u0103 \u00eencerc\u0103ri pentru fiecare \u00eentrebare. Un r\u0103spuns corect la prima \u00eencercare valoreaz\u0103 dou\u0103 puncte, iar la a doua, un punct.</p>\n<p>Vrei <a href=\"https://europa.eu/european-union/about-eu_ro\">s\u0103 afli mai multe despre UE</a>?</p>",
            "heading_congratulations": "Felicit\u0103ri!",
            "label_question": "Question",
            "label_try_again": "Mai \u00eencearc\u0103 o dat\u0103",
            "label_your_score": "Scorul t\u0103u",
            "link_privacy_statement": "Declara\u021bie de confiden\u021bialitate",
            "silver_body_feedback": "<p>Te descurci foarte bine, dar mai ai c\u00e2teva lucruri de aflat despre UE.</p>\n<p>Vrei s\u0103 treci la alt\u0103 sec\u021biune, cu noi \u00eentreb\u0103ri? Alege o nou\u0103 tem\u0103. Ai dreptul la dou\u0103 \u00eencerc\u0103ri pentru fiecare \u00eentrebare. Un r\u0103spuns corect la prima \u00eencercare valoreaz\u0103 dou\u0103 puncte, iar la a doua, un punct.</p>\n<p>Vrei <a href=\"https://europa.eu/european-union/about-eu_ro\">s\u0103 afli mai multe despre UE</a>?</p>"
        }
    },
    "sk": {
        "miscelaneous": {
            "body_congratulations_post": ".",
            "body_congratulations_pre": "Dokon\u010dili ste \u010das\u0165 ",
            "bronze_body_feedback": "",
            "button_answer": "Odpove\u010f",
            "button_back_to_question": "Sp\u00e4\u0165 na ot\u00e1zku",
            "button_next_question": "\u010eal\u0161ia ot\u00e1zka",
            "button_see_the_results": "Zobrazi\u0165 v\u00fdsledky",
            "button_start": "Za\u010da\u0165",
            "gold_body_feedback": "<p>V\u00fdborne \u2013 ste naozaj expertom na E\u00da!</p>\n<p>Chcete otestova\u0165 svoje znalosti v&nbsp;inej \u010dasti s&nbsp;nov\u00fdmi ot\u00e1zkami? Vyberte si nov\u00fa t\u00e9mu.<br> Na zodpovedanie ka\u017edej ot\u00e1zky m\u00e1te dva pokusy. Ak uh\u00e1dnete spr\u00e1vnu odpove\u010f na prv\u00fd pokus, z\u00edskate dva body, ak uh\u00e1dnete na druh\u00fd pokus, z\u00edskate jeden bod.</p>\n<p>Chcete si <a href=\"https://europa.eu/european-union/about-eu_sk\">pre\u010d\u00edta\u0165 viac o&nbsp;E\u00da?</a></p>",
            "heading_congratulations": "Blaho\u017eel\u00e1me!",
            "label_question": "Question",
            "label_try_again": "Sk\u00fasi\u0165 znova",
            "label_your_score": "Va\u0161e hodnotenie",
            "link_privacy_statement": "K\u00fatik na vzdel\u00e1vanie \u2013 vyhl\u00e1senie o ochrane osobn\u00fdch \u00fadajov",
            "silver_body_feedback": "<p>Po\u010d\u00ednate si naozaj dobre, ale e\u0161te st\u00e1le m\u00e1te o E\u00da \u010do zis\u0165ova\u0165.</p>\n<p>Chcete otestova\u0165 svoje znalosti v&nbsp;inej \u010dasti s&nbsp;nov\u00fdmi ot\u00e1zkami? Vyberte si nov\u00fa t\u00e9mu. Na zodpovedanie ka\u017edej ot\u00e1zky m\u00e1te dva pokusy. Ak uh\u00e1dnete spr\u00e1vnu odpove\u010f na prv\u00fd pokus, z\u00edskate dva body, ak uh\u00e1dnete na druh\u00fd pokus, z\u00edskate jeden bod.</p>\n<p>Chcete si <a href=\"https://europa.eu/european-union/about-eu_sk\">pre\u010d\u00edta\u0165 viac o&nbsp;E\u00da?</a></p>"
        }
    }
}
}