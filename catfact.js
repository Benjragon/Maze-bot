"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const superagent = require("superagent");
class testCommand {
    constructor() {
        this._command = "catfact";
    }
    help() {
        return "catfact";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let { body } = yield superagent
                .get(`https://catfact.ninja/fact`);
            let gEmbed = new Discord.RichEmbed()
                .setDescription(body.fact)
                .setTimestamp();
            msgObject.channel.send({ embed: gEmbed });
        });
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZmFjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9jYXRmYWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFFdEMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpDLE1BQXFCLFdBQVc7SUFBaEM7UUFFcUIsYUFBUSxHQUFHLFNBQVMsQ0FBQTtJQTJCekMsQ0FBQztJQXZCRyxJQUFJO1FBQ0EsT0FBTyxTQUFTLENBQUM7SUFFckIsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQzFCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFcEMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFHL0UsSUFBSSxFQUFDLElBQUksRUFBQyxHQUFHLE1BQU0sVUFBVTtpQkFDNUIsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUE7WUFFbEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNuQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDekIsWUFBWSxFQUFFLENBQUE7WUFDZixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLENBQUM7S0FBQTtDQUdKO0FBN0JELDhCQTZCQyJ9