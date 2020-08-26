const args = process.argv;
let times = args.slice(2);
times = times.filter(x => x > 0 && typeof parseInt(x) === 'number');

for (const time of times) {
  const miliTime = time * 1000;
  setTimeout(() => {
    console.log(time, " seconds");
    process.stdout.write('\x07');
  }, miliTime);
};