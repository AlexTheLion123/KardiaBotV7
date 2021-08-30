const { Composer } = require('micro-bot');

const bot = new Composer;

bot.start(ctx => {
    ctx.reply("Good day")
})

bot.command("hello", ctx => {
    ctx.reply("Hello world");
})

bot.command("goodby", ctx => {
    ctx.reply("Goodbye");
})

module.exports = bot;