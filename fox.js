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
        this._command = "fox";
    }
    help() {
        return "fox";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let { body } = yield superagent
                .get(`https://randomfox.ca/floof/`);
            if (!{ body })
                msgObject.channel.send("i broke");
            let dEmbed = new Discord.RichEmbed()
                .setImage(body.image)
                .setTimestamp();
            msgObject.channel.send({ embed: dEmbed });
        });
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2ZveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBRXRDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV6QyxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxLQUFLLENBQUE7SUE0QnJDLENBQUM7SUF4QkcsSUFBSTtRQUNBLE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7SUFDRCxhQUFhLENBQUMsT0FBZTtRQUMxQixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRXBDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRy9FLElBQUksRUFBQyxJQUFJLEVBQUMsR0FBRyxNQUFNLFVBQVU7aUJBQzVCLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1lBRW5DLElBQUcsQ0FBQyxFQUFDLElBQUksRUFBQztnQkFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxQyxJQUFJLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNwQixZQUFZLEVBQUUsQ0FBQTtZQUNmLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFakQsQ0FBQztLQUFBO0NBR0o7QUE5QkQsOEJBOEJDIn0=