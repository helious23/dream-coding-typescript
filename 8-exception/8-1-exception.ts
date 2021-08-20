// Java: Exception
// Javascript: Error

// const array = new Array(100000000000000000000);

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {
  //
}

function run() {
  const fileName = "not exist!";
  try {
    readFile(fileName);
  } catch (error) {
    console.log("catched!");
  } finally {
    closeFile(fileName);
    console.log("closed!");
  }
}
run();
