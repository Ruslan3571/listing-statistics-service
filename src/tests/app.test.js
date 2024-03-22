const app = require('../app');
const request = require('supertest');
const controller = require('../controllers');

const mockListen = jest.fn();
app.listen = mockListen;

jest.mock('../controllers', () => ({
   get: jest.fn(),
   save: jest.fn(),
}));

afterEach(() => {
   jest.clearAllMocks();
   mockListen.mockReset();
});

describe('Server started', () => {
   it('should listen on the correct port', async () => {
      const PORT = 3000;

      app.listen(PORT);
      await new Promise(resolve => setTimeout(resolve, 1000));

      expect(mockListen.mock.calls.length).toBe(1);
      expect(mockListen.mock.calls[0][0]).toBe(PORT);
   });

   it('should call get controller when GET request is made', async () => {
      const autoId = 123;
      const typeId = 1;

      await request(app.callback()).get(`/${autoId}?typeId=${typeId}`);
      expect(controller.get).toHaveBeenCalledTimes(1);
   });

   it('should call save controller when POST request is made', async () => {
      const autoId = 123;
      const data = { typeId: 1 };

      await request(app.callback()).post(`/${autoId}`).send(data);
      expect(controller.save).toHaveBeenCalledTimes(1);
   });
});
