/**
 * VaporBooster - ASCII Art Banners
 * Display branded headers and logos
 * 
 * @author VaporBooster Team
 */

const c = require('./colors');

const VERSION = '3.0.0';

/**
 * Display full ASCII banner
 */
function display() {
    const banner = `
${c.cyan} _   _                        ${c.reset}
${c.cyan}| | | |                       ${c.reset}
${c.cyan}| | | | __ _ _ __   ___  _ __ ${c.reset}
${c.cyan}| | | |/ _\` | '_ \\ / _ \\| '__|${c.reset}
${c.brightCyan}\\ \\_/ / (_| | |_) | (_) | |   ${c.reset}
${c.brightCyan} \\___/ \\__,_| .__/ \\___/|_|   ${c.reset}
${c.blue}            | |  ${c.white}BOOSTER${c.reset}      
${c.blue}            |_|  ${c.dim}v${VERSION}${c.reset}       
`;
    console.log(banner);
    console.log(`${c.dim}${'─'.repeat(40)}${c.reset}`);
    console.log(`  ${c.cyan}Steam Hour Booster${c.reset} ${c.dim}│${c.reset} ${c.green}Ready${c.reset}`);
    console.log(`${c.dim}${'─'.repeat(40)}${c.reset}`);
}

/**
 * Display minimal header
 */
function displayMini() {
    console.log(`\n${c.cyan}┌────────────────────────────────────────┐${c.reset}`);
    console.log(`${c.cyan}│${c.reset}  ${c.bold}${c.brightCyan}VAPOR${c.white}BOOSTER${c.reset} ${c.dim}v${VERSION}${c.reset}    ${c.green}● Online${c.reset}     ${c.cyan}│${c.reset}`);
    console.log(`${c.cyan}└────────────────────────────────────────┘${c.reset}`);
}

/**
 * Get version string
 */
function getVersion() {
    return VERSION;
}

module.exports = {
    display,
    displayMini,
    getVersion,
    VERSION
};