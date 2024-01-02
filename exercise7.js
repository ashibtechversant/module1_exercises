function validateGL(gLConfig, gLSegments) {
  for (const i in gLConfig) {
    const type=gLConfig[i].type;
    const value=gLSegments[i];
    if(type=="REQUIRED" && value==="") return false;
    if(value.length>i.length) return false;
  }
  return true;
}
const gLConfig = {
  CO: { type: "REQUIRED" },
  MAJ: { type: "NORMAL" },
  SET: { type: "NORMAL" },
  MIN: { type: "REQUIRED" },
};
const gLSegments = {
    CO : "11",
    MAJ: "",
    SET: "111",
    MIN: "000"
  }

const result=validateGL(gLConfig,gLSegments);
console.log(result)
