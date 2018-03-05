export const mockRes = {
    outBoxSuccess: {
        'id': 'api.plugin.announcement.user.outbox', 'ver': '1.0', 'ts': '2018-02-21 07:12:21:117+0000',
        'params': {
            'resmsgid': '8ee7d2d0-16d6-11e8-b881-f9ecfdfe4059', 'msgid': null,
            'status': 'successful', 'err': '', 'errmsg': ''
        },
        'responseCode': 'OK', 'result': {
            'count': 1169, 'announcements': [{
                'id': '7ffbff00-160c-11e8-b9b4-393f76d4675b',
                'from': 'asdasd', 'type': 'Circular', 'title': 'wsw', 'description': 'asda', 'links': [],
                'attachments': [], 'createdDate': '2018-02-20 07:05:57:744+0000', 'status': 'cancelled',
                'target': { 'geo': { 'ids': ['01236686178285977611'] } }, 'metrics': { 'sent': 0, 'read': 0, 'received': 0 }
            }]
        }
    },
    outboxError: {
        error: {
            'id': 'api.plugin.announcement.user.outbox', 'ver': '1.0', 'ts': '2018-02-26 09:22:46:452+0000',
            'params': {
                'resmsgid': '9b3bef40-1ad6-11e8-98b8-5deaf514b022', 'msgid': null, 'status': 'failed', 'err': '',
                'errmsg': 'Cannot set property of undefined'
            }, 'responseCode': 'CLIENT_ERROR', 'result': {}
        }
    },
    outboxData: [{
        'id': '7ffbff00-160c-11e8-b9b4-393f76d4675b',
        'from': 'asdasd', 'type': 'Circular', 'title': 'wsw', 'description': 'asda', 'links': [],
        'attachments': [], 'createdDate': '2018-02-20 07:05:57:744+0000', 'status': 'active',
        'target': { 'geo': { 'ids': ['01236686178285977611'] } }, 'metrics': { 'sent': 0, 'read': 0, 'received': 0 }
    }],
    resourceBundle: {
        'messages': {
            'smsg': {
                'moo41': 'Announcement cancelled successfully...'
            },
            'emsg': {
                'm0005': 'Something went wrong, please try in some time....',
            }
        }
    }
};