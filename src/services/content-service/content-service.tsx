import { getContentResponseMock } from "../../__test-utils__/mocks/content-service-response";
import { Content } from "../../types/content/content";

export function getContent() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(getContentResponseMock), 300); // simula atraso da API
      });
}

export function postContent(content: Content): Promise<Content[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      getContentResponseMock.push(content);
      resolve(getContentResponseMock)
    }, 300); // simula atraso da API
  });
}