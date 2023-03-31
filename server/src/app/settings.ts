const Settings = {
    kind: process.argv.slice(2)[0],
    port: parseInt(process.argv.slice(3)[0]),
    foreignPort: parseInt(process.argv.slice(4)[0]),
    frequency: parseInt(process.argv.slice(5)[0])
}

export default Settings;
