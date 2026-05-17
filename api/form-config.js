/** Public form config — access key is safe to expose (Web3Forms is domain-restricted). */
export default function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
  res.status(200).json({
    web3formsAccessKey: (process.env.WEB3FORMS_ACCESS_KEY || "").trim(),
  });
}
