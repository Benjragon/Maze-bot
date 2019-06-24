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
        this._command = "bird";
    }
    help() {
        return "bird";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let { body } = yield superagent
                .get(`http://some-random-api.ml/img/birb`);
            if (!{ body })
                msgObject.channel.send("i broke");
            let gEmbed = new Discord.RichEmbed()
                .setImage(body.link)
                .setTimestamp();
            msgObject.channel.send({ embed: gEmbed });
        });
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9iaXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFFdEMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpDLE1BQXFCLFdBQVc7SUFBaEM7UUFFcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQTtJQTRCdEMsQ0FBQztJQXhCRyxJQUFJO1FBQ0EsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQzFCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFcEMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFHL0UsSUFBSSxFQUFDLElBQUksRUFBQyxHQUFHLE1BQU0sVUFBVTtpQkFDNUIsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUE7WUFFMUMsSUFBRyxDQUFDLEVBQUMsSUFBSSxFQUFDO2dCQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLElBQUksTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ25CLFlBQVksRUFBRSxDQUFBO1lBQ2YsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVqRCxDQUFDO0tBQUE7Q0FHSjtBQTlCRCw4QkE4QkMifQ==