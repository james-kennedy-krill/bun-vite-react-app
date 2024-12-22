CREATE MIGRATION m1wc4bsdzir3p2npvpnmyddhodznm7eis2jd7rhjgol5trvsvl2sba
    ONTO initial
{
  CREATE TYPE default::Content {
      CREATE REQUIRED PROPERTY title: std::str;
      CREATE REQUIRED PROPERTY value: std::str;
  };
};
