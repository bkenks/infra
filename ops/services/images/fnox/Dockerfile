FROM jdxcode/mise:2026.10.4-debian

WORKDIR /work

RUN mise use -g 1password-cli@2.41
RUN mise use -g fnox@1.39

COPY --chmod=755 entrypoint.sh /usr/local/bin/entrypoint.sh
ENTRYPOINT [ "/usr/local/bin/entrypoint.sh" ]

CMD [ "./run.sh" ]