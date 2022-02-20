// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";

// type Data = {
//   name: string;
// };

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // don't send cookies to API server
  req.headers.cookie = "";

  // /api/students
  // https://js-post-api.herokuapp.com/api/students

  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false, // khi nhận response từ server api về, không cần handle response, trả thẳng về client
  });

  //lúc này không cần tự handle reponse nữa
  //res.status(200).json({ name: "PATH - Match all here" });

  //get
  //url: https://js-post-api.herokuapp.com/api/students?_page=1

  //test update patch
  //url: https://js-post-api.herokuapp.com/api/students/sktwi1cgkkuif36f3
  //body:
  // {
  //   "name": "Callie Christianse (edited)",
  // },

  // docs > api routes > api middlewares > custom config
  // để truyền thẳng json lên server api luôn
  // tắt bodyParser

  // do có sử dụng biến môi trường
  // vào vercel
  // chọn project > settings
  // chọn tab environment variables:
}
