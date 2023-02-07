export const setColor = (sns: string) => {
  if (sns === "Facebook" || sns === "Twitter") {
    return "primary";
  } else if (sns === "Instagram" || sns === "Discord" || sns === "NFT") {
    return "info";
  } else if (sns === "Youtube") {
    return "danger";
  } else {
    return "dark";
  }
};

export const exampleURL = (sns: string) => {
  if (sns === "Facebook") return "https://facebook.com/klaytn.official";
  if (sns === "Instagram") return "https://instagram.com/p/Ca7SYYHpgLu/";
  if (sns === "Twitter")
    return "https://twitter.com/klaytn_official/status/1574900715381825539";
  if (sns === "Youtube") return "https://youtube.com/c/Klaytn_official";
  if (sns === "Discord")
    return "https://discord.com/channels/937571529087152189/952307109339463730";
  if (sns === "ETC") return "https://example.com";
};

export const setType = (sns: string, option: string) => {
  return sns === "ETC"
    ? "link"
    : `${sns}.${option === "join" ? "invite" : option}`;
};
