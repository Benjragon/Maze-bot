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
class testCommand {
    constructor() {
        this._command = "help";
    }
    help() {
        return "help command";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.channel.send("  help - Maze gives you a list of his commands. (Prefix is tilde ~) \nbeep - Beep beep! \ninvite - I share my auth link so you can spread me like a virus >:3c (but I'm not so don't worry) \ncursed - Maze sends a cursed image from his folder (submitted by other users) \nsay - make maze talk, but nothing he says is cannon so your dreams will never be fulfilled ;) \nhomer - do the homer shake \nshrek - posts a link to a low quality version of the entire shrek movie \ncat - posts a cat image \nfox - posts a fox image \nrps(input) play rock paper scissors with maze \nkanye - posts a kanye west quote \ncatfact - posts a fact about cats \nbird - posts a bird image \ngithub - posts the link to my github repository");
        });
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUFvQnRDLENBQUM7SUFoQkcsSUFBSTtRQUNBLE9BQU8sY0FBYyxDQUFDO0lBRTFCLENBQUM7SUFDRCxhQUFhLENBQUMsT0FBZTtRQUMxQixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRXBDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBRy9FLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDJwQkFBMnBCLENBQUMsQ0FBQztRQUN4ckIsQ0FBQztLQUFBO0NBR0o7QUF0QkQsOEJBc0JDIn0=
