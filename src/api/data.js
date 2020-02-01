/**
 * Mocking client-server processing
 */
import user from './settings.js'
import { date } from 'quasar'

const _messages = [
  {
    from: {
      name: 'Google',
      email: 'security@accounts.google.com'
    },
    to: { ...user },
    copy: '',
    subject: 'Login from new device',
    text: ` <p>Hello!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque eius minima pariatur repudiandae. A adipisci consequuntur, deserunt exercitationem expedita facere id minus, nobis nulla odio officiis quasi ratione reprehenderit saepe, temporibus tenetur veniam voluptates. Dolorem esse incidunt numquam totam. Dicta distinctio inventore reprehenderit ullam voluptatum. Consectetur consequatur debitis dolor ipsum quam quas quo sunt tempore totam vero! Accusamus alias aliquam, aliquid amet aperiam architecto aspernatur distinctio doloremque id incidunt, odit quaerat soluta voluptatibus. Aliquid commodi, corporis cupiditate debitis distinctio explicabo hic illo itaque laborum ratione, rerum, soluta sunt ut. Autem debitis exercitationem maxime odit optio praesentium quos sunt vero?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque eius minima pariatur repudiandae. A adipisci consequuntur, deserunt exercitationem expedita facere id minus, nobis nulla odio officiis quasi ratione reprehenderit saepe, temporibus tenetur veniam voluptates. Dolorem esse incidunt numquam totam. Dicta distinctio inventore reprehenderit ullam voluptatum. Consectetur consequatur debitis dolor ipsum quam quas quo sunt tempore totam vero! Accusamus alias aliquam, aliquid amet aperiam architecto aspernatur distinctio doloremque id incidunt, odit quaerat soluta voluptatibus. Aliquid commodi, corporis cupiditate debitis distinctio explicabo hic illo itaque laborum ratione, rerum, soluta sunt ut. Autem debitis exercitationem maxime odit optio praesentium quos sunt vero?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque eius minima pariatur repudiandae. A adipisci consequuntur, deserunt exercitationem expedita facere id minus, nobis nulla odio officiis quasi ratione reprehenderit saepe, temporibus tenetur veniam voluptates. Dolorem esse incidunt numquam totam. Dicta distinctio inventore reprehenderit ullam voluptatum. Consectetur consequatur debitis dolor ipsum quam quas quo sunt tempore totam vero! Accusamus alias aliquam, aliquid amet aperiam architecto aspernatur distinctio doloremque id incidunt, odit quaerat soluta voluptatibus. Aliquid commodi, corporis cupiditate debitis distinctio explicabo hic illo itaque laborum ratione, rerum, soluta sunt ut. Autem debitis exercitationem maxime odit optio praesentium quos sunt vero?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque eius minima pariatur repudiandae. A adipisci consequuntur, deserunt exercitationem expedita facere id minus, nobis nulla odio officiis quasi ratione reprehenderit saepe, temporibus tenetur veniam voluptates. Dolorem esse incidunt numquam totam. Dicta distinctio inventore reprehenderit ullam voluptatum. Consectetur consequatur debitis dolor ipsum quam quas quo sunt tempore totam vero! Accusamus alias aliquam, aliquid amet aperiam architecto aspernatur distinctio doloremque id incidunt, odit quaerat soluta voluptatibus. Aliquid commodi, corporis cupiditate debitis distinctio explicabo hic illo itaque laborum ratione, rerum, soluta sunt ut. Autem debitis exercitationem maxime odit optio praesentium quos sunt vero?</p>
            <p><a href="#">security@accounts.google.com</a></p>
        `,
    date: date.formatDate(new Date(2020, 0, 21), 'DD MMM YYYY'),
    attachments: [],
    isImportant: false,
    isDeleted: false,
    isRead: false
  },
  {
    from: {
      name: 'Виктория',
      email: 'viktoria@medsoft.su'
    },
    to: { ...user },
    copy: '',
    subject: 'Собеседование 28.01.2020',
    text: ` <p>Добрый день, ${user.name} !</p>
            <p>Приглашаем Вас на собеседование завтра в 15:00.</p>
            <p>Прошу заранее заполнить анкету и выслать мне (см. вложение).</p>
        `,
    date: date.formatDate(new Date(2020, 0, 27), 'DD MMM YYYY'),
    attachments: ['job-description.pdf', 'anketa.doc'],
    isImportant: false,
    isDeleted: false,
    isRead: false
  }
]

export default {
  getMessages (cb) {
    setTimeout(() => cb(_messages), 100)
  }
}
