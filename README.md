### Библиотека для работы с API Cash Banger. 

Ниже указана информации об API.

# Cash Banger API - RU Doc

# Additional information

1) Все запросы идут по адресу api.bla-bla-bla.com
2) Для отправки любых запросов вам необходимо добавлять заголовок Authorization к запросу с вашим токеном API
3) Все методы, при ошибке, возвращают ее в формате:
```json5
{
  "status": "error",
  "message": "some message about error here",
  // необязательный параметр, доп. информация об ошибке, например, при ошибке валидации.
  "errors": [
    {
      "message": "some additional message"
    }
  ] 
}
```
4) Все методы возвращают ответы в формате:
```json5
{
  "status": "ok | error",
  "response": {} // обьект ответа
}
```

При описании ответов предполагается, что тело ответа будет в response, а статус = "ok" при успешном запросе. При ошибках формат ответа описан выше.

## User routes - ```/users/```

### GET ```/:id/?is_extended=true|false``` - информация о профиле игрока.

```id``` - uuid пользователя.

```is_extended``` - необязательный - вернуть полный ответ о пользователе или нет, дефолтное значение - false.

В ответ сервер вернет следующий json-обьект:
```json5
{
  "profile": {
    "id": "0000-000000-00000-0000", // uuid v4
    "nickname": "defany"
  },
  // Все балансы пользователя, которые на данный момент доступны.
  "balances": [
    {
      "currency": "code",
      "amount": 100
    },
  ],
  // Вернется при is_extended=true
  // Массив одежды, которая прямо сейчас одета на пользователе.
  "clothes": [
    // TODO: полное описание обьекта одежды
    {
      "id": "0000-000000-00000-0000", // uuid v4
      "name": "string",
      "image_url": "string"
    } 
  ]
}
```

## Balance routes - ```/balances```

### POST ```/``` - отправка платежа другому пользователю

Обьект запроса:
```json5
{
  "receive_id": "string", // uuid v4 другого пользователя
  "amount": 100.1,
  "comment": "some text here"
}
```

В ответ сервер вернет id платежа:
```json5
{
  "id": "0000-000000-00000-0000", // uuid v4
}
```

### GET ```/history?limit=100&next_payment_id=0000-000000-00000-0000``` - вернет историю платежей владельца токена.

```limit``` - необязательный - максимальное количество платежей, которые необходимо вернуть. Минимум 10, максимум 100. По дефолту: 10 <br />
```next_payment_id``` - необязательный - айди платежа после которого необходимо делать выборку.

Ответ сервера:
```json5
{
  "payments": [
    {
      "id": "0000-000000-00000-0000", // uuid v4
      "sender_id": "0000-000000-00000-0000", // uuid v4
      "receive_id": "0000-000000-00000-0000", // uuid v4
      "amount": 0.00,
      "comment": "string" // Необязательный параметр, может отсутствовать
    }
  ],
  "total": 100, 
  "next_payment_id": "0000-000000-00000-0000", // uuid v4, может отсутсвовать, если больше платежей, на момент запроса, нету
}
```