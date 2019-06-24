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
        this._command = "cursed";
    }
    help() {
        return "sends a cursed image";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            var number = 156;
            var imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
            msgObject.channel.send({ files: ["../cursed/" + imageNumber + ".jpg"] });
            if (imageNumber >= 3 && imageNumber <= 94) {
                msgObject.channel.send("suggested by <https://twitter.com/JustAMuramasa?lang=en>");
            }
            if (imageNumber >= 95 && imageNumber <= 99) {
                msgObject.channel.send("suggested by <https://twitter.com/kulerage?lang=en>");
            }
            if (imageNumber >= 100 && imageNumber <= 101) {
                msgObject.channel.send("suggested by Kwizz");
            }
            if (imageNumber >= 102 && imageNumber <= 124) {
                msgObject.channel.send("suggested by <https://twitter.com/xenotwo?lang=en>");
            }
            if (imageNumber >= 125 && imageNumber <= 147) {
                msgObject.channel.send("suggested by <https://twitter.com/FK_Swampert?lang=en>");
            }
            if (imageNumber >= 148 && imageNumber <= 157) {
                msgObject.channel.send("suggested by <https://twitter.com/Mocha_latteyyy?lang=en>");
            }
        });
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Vyc2VkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2N1cnNlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsTUFBcUIsV0FBVztJQUFoQztRQUVxQixhQUFRLEdBQUcsUUFBUSxDQUFBO0lBNEN4QyxDQUFDO0lBeENHLElBQUk7UUFDQSxPQUFPLHNCQUFzQixDQUFDO0lBRWxDLENBQUM7SUFDRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRXJDLENBQUM7SUFDSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBQy9FLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNqQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLEdBQUcsV0FBVyxHQUFHLE1BQU0sQ0FBQyxFQUFDLENBQUMsQ0FBQTtZQUV4RSxJQUFJLFdBQVcsSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLEVBQUUsRUFDekM7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsMERBQTBELENBQUMsQ0FBQTthQUN0RjtZQUNELElBQUksV0FBVyxJQUFJLEVBQUUsSUFBSSxXQUFXLElBQUksRUFBRSxFQUMxQztnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxxREFBcUQsQ0FBQyxDQUFBO2FBQ2pGO1lBQ0QsSUFBSSxXQUFXLElBQUksR0FBRyxJQUFJLFdBQVcsSUFBSSxHQUFHLEVBQzVDO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLG9CQUFvQixDQUFDLENBQUE7YUFDaEQ7WUFDRCxJQUFJLFdBQVcsSUFBSSxHQUFHLElBQUksV0FBVyxJQUFJLEdBQUcsRUFDNUM7Z0JBQ0ksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsb0RBQW9ELENBQUMsQ0FBQTthQUNoRjtZQUNELElBQUksV0FBVyxJQUFJLEdBQUcsSUFBSSxXQUFXLElBQUksR0FBRyxFQUM1QztnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSx3REFBd0QsQ0FBQyxDQUFBO2FBQ3BGO1lBQ0QsSUFBSSxXQUFXLElBQUksR0FBRyxJQUFJLFdBQVcsSUFBSSxHQUFHLEVBQzVDO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLDJEQUEyRCxDQUFDLENBQUE7YUFDdkY7UUFDTCxDQUFDO0tBQUE7Q0FHSjtBQTlDRCw4QkE4Q0MifQ==