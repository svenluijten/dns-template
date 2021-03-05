var REG_NONE = NewRegistrar('none', 'NONE');

var DNS_CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI', {'manage_redirects': true});

D('example.com', REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    CF_PROXY_DEFAULT_ON,
    DefaultTTL('30s'),
    A('@', '127.0.0.1'),
    CNAME('www', '@')
);
