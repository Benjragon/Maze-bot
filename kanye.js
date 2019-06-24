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
        this._command = "kanye";
    }
    help() {
        return "kanye";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let { body } = yield superagent
                .get(`https://api.kanye.rest`);
            let fEmbed = new Discord.RichEmbed()
                .setDescription(body.quote)
                .setTimestamp();
            msgObject.channel.send({ embed: fEmbed });
        });
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FueWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMva2FueWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUV0QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFekMsTUFBcUIsV0FBVztJQUFoQztRQUVxQixhQUFRLEdBQUcsT0FBTyxDQUFBO0lBMkJ2QyxDQUFDO0lBdkJHLElBQUk7UUFDQSxPQUFPLE9BQU8sQ0FBQztJQUVuQixDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDMUIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUVwQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUcvRSxJQUFJLEVBQUMsSUFBSSxFQUFDLEdBQUcsTUFBTSxVQUFVO2lCQUM1QixHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtZQUU5QixJQUFJLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ25DLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUMxQixZQUFZLEVBQUUsQ0FBQTtZQUNmLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFN0MsQ0FBQztLQUFBO0NBR0o7QUE3QkQsOEJBNkJDIn0=